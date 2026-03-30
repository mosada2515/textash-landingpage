import type { CSSProperties, HTMLAttributes } from "react";

type IMessageBubbleVariant = "outgoing" | "incoming";

export interface IMessageBubbleProps
    extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
    text: string;
    variant?: IMessageBubbleVariant;
    from?: string;
    bubbleColor?: string;
    textColor?: string;
}

type BubbleStyle = CSSProperties & {
    "--bubble-color"?: string;
    "--bubble-text-color"?: string;
};

const SYSTEM_FONT =
    '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "Helvetica Neue", sans-serif';

const OUTGOING_TAIL_PATH =
    "M9.58136 20.1209C8.62048 25.8861 3.19379 31.2991 0 32.5766C12.2641 32.5766 20.1209 28.4247 22.0371 25.8697L31.6185 28.7441L30.6604 0H10.5395V3.83255V7.66509V8.62323C10.5395 10.5395 10.5395 14.372 9.58136 20.1209Z";

const joinClasses = (...classes: Array<string | false | null | undefined>) =>
    classes.filter(Boolean).join(" ");

export function IMessageBubble({
    text,
    variant = "outgoing",
    from,
    bubbleColor,
    textColor,
    className,
    style,
    ...props
}: IMessageBubbleProps) {
    const isOutgoing = variant === "outgoing";

    const bubbleStyle: BubbleStyle = {
        "--bubble-color": bubbleColor ?? (isOutgoing ? "#157EFB" : "#E9E9EE"),
        "--bubble-text-color": textColor ?? (isOutgoing ? "#FFFFFF" : "#111827"),
        ...style,
    };

    return (
        <div
            className={joinClasses(
                "inline-flex max-w-full flex-col gap-1",
                isOutgoing ? "items-end" : "items-start",
                className
            )}
            style={bubbleStyle}
            {...props}
        >
            {from ? (
                <span className="px-1 text-[10px] font-medium uppercase tracking-[0.16em] text-black/45">
                    {from}
                </span>
            ) : null}

            <div className="relative inline-flex max-w-full overflow-visible drop-shadow-[0_1px_1px_rgba(15,23,42,0.05)]">
                <div
                    className={joinClasses(
                        "relative z-10 inline-flex min-h-[2.625rem] max-w-full items-center px-4 py-2 text-[13px] leading-[1.12] tracking-[-0.02em] md:text-[15px]",
                        isOutgoing
                            ? "rounded-[1.625rem] rounded-br-[1rem]"
                            : "rounded-[1.625rem] rounded-bl-[1rem]"
                    )}
                    style={{
                        backgroundColor: "var(--bubble-color)",
                        color: "var(--bubble-text-color)",
                        fontFamily: SYSTEM_FONT,
                    }}
                >
                    <span className="block whitespace-pre-line break-words">
                        {text}
                    </span>
                </div>

                <div
                    aria-hidden="true"
                    className={joinClasses(
                        "absolute bottom-px z-10 block h-[0.6rem] w-[0.6rem] bg-[var(--bubble-color)]",
                        isOutgoing
                            ? "right-[-0.05rem] rounded-bl-[0.55rem] rounded-br-[0.2rem]"
                            : "left-[-0.05rem] rounded-br-[0.55rem] rounded-bl-[0.2rem]"
                    )}
                />

                <svg
                    aria-hidden="true"
                    viewBox="0 0 31.6185 32.5766"
                    className={joinClasses(
                        "absolute bottom-0 h-[0.95rem] w-[0.95rem] overflow-visible",
                        isOutgoing ? "right-[-0.3rem]" : "left-[-0.3rem]"
                    )}
                    style={{
                        transform: isOutgoing ? "scaleX(-1)" : undefined,
                        transformOrigin: "center center",
                    }}
                >
                    <path
                        d={OUTGOING_TAIL_PATH}
                        fill="var(--bubble-color)"
                    />
                </svg>
            </div>
        </div>
    );
}
