import Hero from "@/components/ui/neural-network-hero";
import { GlowingEffectDemo } from "@/components/ui/glowing-effect";
import { PricingSectionDemo } from "@/components/ui/pricing-section-demo";
import { Testimonials } from "@/components/ui/testimonials-columns-1";
import { Footerdemo } from "@/components/ui/footer-section";

export default function DemoOne() {
    return (
        <main className="min-h-screen w-full flex flex-col bg-background transition-colors duration-300">
            <div className="flex-1 flex flex-col">
            <section className="relative">
                <Hero
                    title="Where website designs become art."
                    description="A minimal hero with a neural canvas — crisp, elegant, and quietly expressive. Built with React, Three.js, and a custom CPPN shader."
                    ctaButtons={[
                        { text: "Get started", href: "#get-started", primary: true },
                        { text: "View showcase", href: "#showcase" }
                    ]}
                />
            </section>

            <section className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-16 pt-8 md:px-10 lg:px-16">
                <GlowingEffectDemo />
            </section>

            <section className="relative z-10 w-full px-6 pb-16 md:px-10 lg:px-16">
                <PricingSectionDemo />
            </section>

            <section className="relative z-10 w-full">
                <Testimonials />
            </section>
            
            </div>
            <footer>
                <Footerdemo />
            </footer>
        </main>
    );
}
