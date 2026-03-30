import { IMessageBubble } from "@/app/components/ui/IMessageBubble";

export default function IMessageBubbleDemoPage() {
    return (
        <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#ffffff_0%,_#f7f4ee_100%)] px-6 py-16 text-slate-900">
            <div className="mx-auto flex w-full max-w-3xl flex-col gap-10">
                <header className="space-y-3 text-center">
                    <p className="text-xs font-medium uppercase tracking-[0.24em] text-slate-500">
                        UI Demo
                    </p>
                    <h1
                        className="text-3xl font-semibold tracking-tight sm:text-4xl"
                        style={{ fontFamily: "var(--font-baskerville, Georgia, serif)" }}
                    >
                        IMessageBubble
                    </h1>
                    <p className="mx-auto max-w-xl text-sm leading-6 text-slate-600">
                        A standalone bubble primitive with a connected rounded tail,
                        clean spacing, and color-customizable variants.
                    </p>
                </header>

                <section className="rounded-[2rem] border border-black/5 bg-white/70 p-6 shadow-[0_24px_60px_rgba(15,23,42,0.06)] backdrop-blur-sm sm:p-8">
                    <div className="flex flex-col gap-6">
                        <IMessageBubble
                            text="I found someone for you."
                            className="max-w-[19rem]"
                        />

                        <IMessageBubble
                            text="Someone already vouched for them. You just get the intro."
                            bubbleColor="#0078FF"
                            className="max-w-[24rem] self-end"
                        />

                        <IMessageBubble
                            text="If you're into low-pressure intros, this is the whole point."
                            variant="incoming"
                            from="Ash"
                            className="max-w-[22rem]"
                        />
                    </div>
                </section>
            </div>
        </main>
    );
}
