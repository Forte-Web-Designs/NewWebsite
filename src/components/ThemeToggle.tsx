'use client';

import { useTheme } from '@/app/providers/ThemeProvider';
import { Icon } from '@/components/images/Icon';

export function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <button
        className="relative flex items-center w-[50.6667px] h-[28px] rounded-[66.67px] border p-[4px] transition-all duration-300 bg-white border-gray-200"
        aria-label="Loading theme toggle"
        disabled
      >
        <div className="absolute w-[20px] h-[20px] rounded-full left-[4px] bg-[#0051EF] border border-[#0047D1]"></div>
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className={`relative flex items-center w-[50.6667px] h-[28px] rounded-[66.67px] border p-[4px] transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer ${theme === 'light'
          ? 'bg-white border-gray-200 hover:border-gray-300'
          : 'bg-[#323232] border-[#666666] border-opacity-50 hover:border-[#888888]'
        }`}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      data-clickable
    >
      <span className={`absolute inset-0 rounded-[66.67px] ${theme === 'light'
          ? 'bg-gradient-to-r from-white to-[#E4E4E4]'
          : 'bg-gradient-to-r from-black to-[#666666]'
        } opacity-20 -z-10`}></span>

      {/* Toggle handle - position reversed */}
      <div className={`absolute w-[20px] h-[20px] rounded-full transition-all duration-300 flex items-center justify-center ${theme === 'light'
          ? 'left-[calc(100%-24px)] bg-[#0051EF] border border-[#0047D1]'
          : 'left-[4px] bg-[#0051EF] border border-[#0047D1]'
        }`}>
        {theme === 'light' ? (
          <Icon name="dark-icon-sun" size={12} className="text-white" alt="Dark mode icon" />
        ) : (
          <Icon name="light-mood-1" size={12} className="text-white" alt="Light mode icon" />
        )}
      </div>

      <div className="flex items-center justify-between w-full h-full px-[2.67px]">
        {/* Dark icon - visible in light mode */}
        <div className="w-[12px] h-[12px] flex items-center justify-center">
          <Icon
            name="dark-mode"
            size={12}
            className={theme === 'dark' ? 'text-[#C2D7FF]' : 'text-transparent'}
            alt=""
          />
        </div>

        {/* Light icon - visible in dark mode */}
        <div className="w-[12px] h-[12px] flex items-center justify-center">
          <Icon
            name="dark-icon-sun"
            size={12}
            className={theme === 'light' ? 'text-[#C2D7FF]' : 'text-transparent'}
            alt=""
          />
        </div>
      </div>
    </button>
  );
}