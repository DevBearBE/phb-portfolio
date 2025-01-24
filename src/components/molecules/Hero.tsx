import HeroContentLockUp from "@/components/atoms/HeroContentLockUp";
import HeroMedia from "@/components/atoms/HeroMedia";

export default function Hero() {
  return (
    <div className="md:p-8 flex flex-col-reverse lg:grid lg:grid-cols-2 lg:gap-20 lg:bg-white lg:rounded-xl">
      <HeroContentLockUp />
      <HeroMedia />
    </div>
  );
}
