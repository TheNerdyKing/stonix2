"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

/* ─────────────────────────────────────────────────────────────
   Accordion – headless, shadcn-compatible, zero extra deps
   API mirrors shadcn/ui accordion (type="single" | "multiple")
───────────────────────────────────────────────────────────── */

type AccordionCtx = {
    value: string | string[];
    onValueChange: (val: string) => void;
    type: "single" | "multiple";
};

const AccordionContext = React.createContext<AccordionCtx>({
    value: "",
    onValueChange: () => { },
    type: "single",
});

/* ── Root ── */
interface AccordionSingleProps {
    type: "single";
    value?: string;
    defaultValue?: string;
    onValueChange?: (val: string) => void;
    collapsible?: boolean;
    className?: string;
    children: React.ReactNode;
}
interface AccordionMultipleProps {
    type: "multiple";
    value?: string[];
    defaultValue?: string[];
    onValueChange?: (val: string[]) => void;
    className?: string;
    children: React.ReactNode;
}
type AccordionRootProps = AccordionSingleProps | AccordionMultipleProps;

const Accordion = React.forwardRef<HTMLDivElement, AccordionRootProps>(
    (props, ref) => {
        const { type, className, children, ...rest } = props;

        const [internalValue, setInternalValue] = React.useState<string | string[]>(
            type === "multiple"
                ? (rest as AccordionMultipleProps).defaultValue ?? []
                : (rest as AccordionSingleProps).defaultValue ?? ""
        );

        const controlled =
            type === "multiple"
                ? (rest as AccordionMultipleProps).value !== undefined
                : (rest as AccordionSingleProps).value !== undefined;

        const current = controlled
            ? type === "multiple"
                ? (rest as AccordionMultipleProps).value!
                : (rest as AccordionSingleProps).value!
            : internalValue;

        const handleChange = (val: string) => {
            if (type === "multiple") {
                const arr = current as string[];
                const next = arr.includes(val)
                    ? arr.filter((v) => v !== val)
                    : [...arr, val];
                if (!controlled) setInternalValue(next);
                (rest as AccordionMultipleProps).onValueChange?.(next);
            } else {
                const collapsible = (rest as AccordionSingleProps).collapsible ?? true;
                const next = current === val && collapsible ? "" : val;
                if (!controlled) setInternalValue(next);
                (rest as AccordionSingleProps).onValueChange?.(next as string);
            }
        };

        return (
            <AccordionContext.Provider
                value={{ value: current, onValueChange: handleChange, type }}
            >
                <div ref={ref} className={cn("w-full", className)}>
                    {children}
                </div>
            </AccordionContext.Provider>
        );
    }
);
Accordion.displayName = "Accordion";

/* ── Item ── */
type ItemCtx = { itemValue: string; isOpen: boolean };
const AccordionItemContext = React.createContext<ItemCtx>({
    itemValue: "",
    isOpen: false,
});

interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
    value: string;
}
const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
    ({ value, className, children, ...props }, ref) => {
        const { value: ctxValue } = React.useContext(AccordionContext);
        const isOpen = Array.isArray(ctxValue)
            ? ctxValue.includes(value)
            : ctxValue === value;

        return (
            <AccordionItemContext.Provider value={{ itemValue: value, isOpen }}>
                <div
                    ref={ref}
                    className={cn("border-b", className)}
                    data-state={isOpen ? "open" : "closed"}
                    {...props}
                >
                    {children}
                </div>
            </AccordionItemContext.Provider>
        );
    }
);
AccordionItem.displayName = "AccordionItem";

/* ── Trigger ── */
interface AccordionTriggerProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

const AccordionTrigger = React.forwardRef<
    HTMLButtonElement,
    AccordionTriggerProps
>(({ className, children, ...props }, ref) => {
    const { onValueChange } = React.useContext(AccordionContext);
    const { itemValue, isOpen } = React.useContext(AccordionItemContext);

    return (
        <button
            ref={ref}
            type="button"
            aria-expanded={isOpen}
            onClick={() => onValueChange(itemValue)}
            className={cn(
                "flex w-full items-center justify-between py-4 font-medium transition-all",
                className
            )}
            {...props}
        >
            {children}
            {/* Chevron that rotates when open – driven by JS state, not CSS attr selector */}
            <ChevronDown
                className="h-4 w-4 shrink-0 transition-transform duration-300"
                style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
            />
        </button>
    );
});
AccordionTrigger.displayName = "AccordionTrigger";

/* ── Content ── */
interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> { }

const AccordionContent = React.forwardRef<
    HTMLDivElement,
    AccordionContentProps
>(
    // ⚠️ Destructure `style` explicitly so it NEVER overrides the
    //    height/overflow/transition that control the open/close animation.
    ({ className, children, style, ...props }, ref) => {
        const { isOpen } = React.useContext(AccordionItemContext);
        const innerRef = React.useRef<HTMLDivElement>(null);
        const [height, setHeight] = React.useState(0);

        React.useLayoutEffect(() => {
            if (!innerRef.current) return;
            if (isOpen) {
                // Force a reflow so scrollHeight is accurate even on first open
                setHeight(innerRef.current.scrollHeight);
            } else {
                setHeight(0);
            }
        }, [isOpen]);

        return (
            <div
                ref={ref}
                data-state={isOpen ? "open" : "closed"}
                // height/overflow/transition MUST stay here – they must not be
                // overridden by any caller-supplied style prop.
                style={{
                    height: `${height}px`,
                    overflow: "hidden",
                    transition: "height 0.35s ease",
                }}
                // spread remaining props (but NOT style – we handled that above)
                {...props}
            >
                {/* Inner wrapper holds the actual content height for measurement */}
                <div
                    ref={innerRef}
                    className={cn("pt-0 pb-4", className)}
                    style={style}   // Apply the caller's style here (e.g. color)
                >
                    {children}
                </div>
            </div>
        );
    }
);
AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
