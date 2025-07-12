import { Icon } from "@/components/images/Icon";
import ResponsiveSlider from "@/components/slider/ResponsiveSlider";

interface SliderItem {
  title: string;
  description: string;
  icon: string;
}

interface ForteMethodSectionProps {
  // Slider data
  items: SliderItem[];

  // Section content
  badge?: string;
  title: string;
  subtitle: string;

  // Optional styling
  containerHeight?: string;
  className?: string;
  titleClassName?: string;
}

export default function ForteMethodSection({
  items,
  badge = "Workflow",
  title,
  subtitle,
  containerHeight = "h-[380px] sm:h-[580px] md:h-[580px] lg:h-[580px] xl:h-[580px] 2xl:h-[580px]",
  className = "",
  titleClassName = "font-display font-medium text-[38px] sm:text-[88px] leading-[40px] sm:leading-[90px] tracking-[-1.76px] text-start text-gray-900 dark:text-white"
}: ForteMethodSectionProps) {
  return (
    <section className={`bg-white dark:bg-[#000000] pt-16 pb-20 md:pt-24 md:pb-28 lg:pt-32 lg:pb-36 w-full ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap lg:gap-0 md:gap-8 max-w-[1200px] m-auto">
          <div className="w-full lg:w-1/2 md:w-full m-auto">
            <div className="grid gap-6">
              <div className="flex justify-start gap-1">
                <Icon
                  name="star-icon"
                  alt="star-icon"
                  className="w-[18px] h-[18px] mt-1"
                />
                <p className="font-sans font-normal text-2xl leading-6 tracking-[-0.24px] align-middle text-[#8D9DFF]">
                  {badge}
                </p>
              </div>
              <div className="flex align-middle justify-start">
                <h3 className={titleClassName}>
                  {title?.split('|').map((line, index) => (
                    <span key={index}>
                      {line}
                      {index < title.split('|').length - 1 && <br />}
                    </span>
                  ))}
                </h3>
              </div>
              <div className="flex align-middle justify-start">
                <p className="font-display font-medium text-[14px] sm:text-xl leading-[100%] tracking-normal text-start text-gray-600 dark:text-gray-400 mb-10 sm:mb-0">
                  {subtitle}
                </p>
              </div>
            </div>
          </div>

          <ResponsiveSlider
            items={items}
            containerHeight={containerHeight}
          />
        </div>
      </div>
    </section>
  );
} 