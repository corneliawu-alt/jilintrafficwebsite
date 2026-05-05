
import React, { useState, useMemo, useRef, useEffect } from 'react';
import { CATEGORIES, getIcon } from './constants';
import { ActiveTab, Category, SubCategory } from './types';
import { 
  ChevronRight, 
  Menu, 
  X, 
  Info, 
  Users as UsersIcon, 
  ShieldCheck, 
  Car, 
  Award, 
  Navigation,
  School,
  CheckCircle2,
  TrendingUp,
  CalendarDays,
  MessageSquareText,
  ClipboardList,
  Camera,
  BookOpenCheck,
  Globe,
  HeartHandshake,
  Layout,
  GraduationCap,
  Bike,
  Bus,
  Zap,
  Star,
  Compass,
  FileSpreadsheet,
  TrafficCone,
  Siren,
  Construction,
  ShieldAlert,
  MapPin,
  ParkingCircle,
  Users2,
  History,
  FileCheck,
  Presentation,
  UserCheck,
  Laptop,
  PhoneCall,
  Megaphone,
  RefreshCw,
  Youtube,
  Image as ImageIcon,
  ScrollText,
  Stethoscope,
  Cloud,
  Flower,
  Sun,
  Palette,
  Sparkles,
  MousePointer2,
  // Fix: Import missing icons from lucide-react
  Building2,
  BarChart3,
  Trees,
  Baby,
  User
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend
} from 'recharts';

const LG_PX = 1024;

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>({ categoryId: CATEGORIES[0].id });
  /** 寬版（≥lg）：側欄固定顯示；窄版：可收合到畫面左外 */
  const [isWideLayout, setIsWideLayout] = useState(
    () => typeof window !== 'undefined' && window.innerWidth >= LG_PX
  );
  const [isSidebarOpen, setIsSidebarOpen] = useState(
    () => typeof window !== 'undefined' && window.innerWidth >= LG_PX
  );
  const mainContentRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const updateLayout = () => {
      const wide = window.innerWidth >= LG_PX;
      setIsWideLayout(wide);
      if (wide) setIsSidebarOpen(true);
      else setIsSidebarOpen(false);
    };
    updateLayout();
    window.addEventListener('resize', updateLayout);
    return () => window.removeEventListener('resize', updateLayout);
  }, []);

  const activeCategory = useMemo(() => 
    CATEGORIES.find(c => c.id === activeTab.categoryId), 
    [activeTab.categoryId]
  );

  const activeSubCategory = useMemo(() => 
    activeCategory?.subCategories?.find(s => s.id === activeTab.subCategoryId),
    [activeCategory, activeTab.subCategoryId]
  );

  const handleTabClick = (categoryId: string, subCategoryId?: string) => {
    setActiveTab({ categoryId, subCategoryId });
    if (window.innerWidth < LG_PX) {
      setIsSidebarOpen(false);
    }
  };

  const sidebarVisible = isWideLayout || isSidebarOpen;

  // 當頁籤切換時，確保新頁面滾動到頂部
  useEffect(() => {
    // 滾動到頂部的函數 - 使用多種方法確保成功
    const scrollToTop = () => {
      if (mainContentRef.current) {
        // 方法1: 直接設置 scrollTop
        mainContentRef.current.scrollTop = 0;
        // 方法2: 使用 scrollTo
        mainContentRef.current.scrollTo({ top: 0, behavior: 'auto' });
        // 方法3: 使用 scrollIntoView（如果有 header 元素）
        const header = mainContentRef.current.querySelector('header');
        if (header) {
          header.scrollIntoView({ behavior: 'auto', block: 'start' });
        }
      }
    };
    
    // 立即執行
    scrollToTop();
    
    // 使用多個時機確保滾動成功 - 增加延遲時間
    const timeout1 = setTimeout(scrollToTop, 10);
    const timeout2 = setTimeout(scrollToTop, 100);
    const timeout3 = setTimeout(scrollToTop, 200);
    const timeout4 = setTimeout(scrollToTop, 300);
    
    // 使用 requestAnimationFrame
    const rafId1 = requestAnimationFrame(() => {
      scrollToTop();
      const rafId2 = requestAnimationFrame(() => {
        requestAnimationFrame(scrollToTop);
      });
      return rafId2;
    });
    
    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
      clearTimeout(timeout4);
      cancelAnimationFrame(rafId1);
    };
  }, [activeTab.categoryId, activeTab.subCategoryId]);

  const transportData = [
    { name: '走路', 上學: 34, 放學: 31 },
    { name: '家長汽車', 上學: 26, 放學: 11 },
    { name: '家長機車', 上學: 33, 放學: 29 },
    { name: '公車', 上學: 4, 放學: 2 },
    { name: '捷運', 上學: 2, 放學: 2 },
    { name: '補習班接送', 上學: 0, 放學: 24 },
  ];

  const homepageBgUrl = "https://images.unsplash.com/photo-1545128485-c400e7702796?q=80&w=2070&auto=format&fit=crop"; 

  // 3D Isometric Background elements
  const FloatingDecor = () => (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none">
      <div className="absolute top-[5%] left-[8%] animate-float opacity-40">
        <Cloud size={160} className="text-blue-100 drop-shadow-2xl" />
      </div>
      <div className="absolute top-[12%] right-[15%] animate-float-slow opacity-30">
        <Sun size={200} className="text-yellow-100 drop-shadow-[0_20px_40px_rgba(253,224,71,0.2)]" />
      </div>
      <div className="absolute bottom-[15%] left-[12%] animate-float opacity-30">
        <Flower size={100} className="text-pink-100 drop-shadow-xl" />
      </div>
      <div className="absolute bottom-[20%] right-[8%] animate-drift opacity-20">
        <Cloud size={120} className="text-blue-50" />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] scale-[3] blur-3xl pointer-events-none">
        <Sparkles size={400} className="text-purple-400" />
      </div>
    </div>
  );

  return (
    <div className="flex min-h-screen relative lg:overflow-hidden overflow-hidden bg-[#fafafa]">
      {/* Background image for safety promotion, basic info, org-plan, teaching, and guidance pages */}
      {(activeTab.categoryId === 'safety-promotion' || activeTab.categoryId === 'basic-info') && (
        <div className="safety-promotion-bg"></div>
      )}
      {activeTab.categoryId === 'org-plan' && (
        <div className="org-plan-bg"></div>
      )}
      {activeTab.categoryId === 'teaching' && (
        <div className="teaching-bg"></div>
      )}
      {activeTab.categoryId === 'guidance' && (
        <div className="guidance-bg"></div>
      )}
      {activeTab.categoryId === 'innovation' && (
        <div className="innovation-bg"></div>
      )}
      <FloatingDecor />

      {/* 窄版：側欄開啟時點遮罩收合到左側 */}
      {!isWideLayout && isSidebarOpen && (
        <button
          type="button"
          aria-label="關閉選單"
          className="fixed inset-0 z-30 bg-black/40 backdrop-blur-[2px] lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar - Toy-like Dashboard Menu */}
      <aside
        className={`
        fixed left-0 top-0 z-40 w-[min(100vw-1.5rem,20rem)] max-w-[20rem] h-screen transition-transform duration-500 ease-out p-4 sm:p-6
        ${sidebarVisible ? 'translate-x-0' : '-translate-x-full pointer-events-none'}
      `}
      >
        <div className="clay-card h-full flex flex-col bg-white overflow-hidden shadow-2xl">
          <div className="p-6 bg-gradient-to-br from-[#ffc8c0] to-[#fcd5ce] flex flex-col items-center gap-3 relative shrink-0">
            <button
              type="button"
              aria-label="收合選單"
              onClick={() => setIsSidebarOpen(false)}
              className="absolute top-3 right-3 lg:hidden clay-button p-2 bg-white/90 text-[#881337] shadow-md"
            >
              <X size={22} />
            </button>
            <div className="absolute top-0 left-0 w-full h-1 bg-white/20"></div>
            <div className="clay-button p-3 bg-white scale-110 shadow-xl">
              <ShieldCheck size={40} className="text-[#ff7b5f]" />
            </div>
            <div className="text-center">
              <h1 className="text-2xl font-black text-[#6d4c41] leading-tight tracking-tight">
                吉林吉安
              </h1>
              <p className="text-[10px] font-black text-[#881337] opacity-60 uppercase tracking-[0.2em] mt-1">
                Jilin Traffic Safety
              </p>
            </div>
          </div>
          
          <nav className="flex-1 overflow-y-auto p-5 space-y-2 custom-scrollbar">
            {CATEGORIES.map((cat) => (
              <div key={cat.id} className="animate-in fade-in slide-in-from-left-4 duration-500">
                <button
                  onClick={() => handleTabClick(cat.id, cat.subCategories?.[0]?.id)}
                  className={`
                    w-full flex items-center gap-4 px-6 py-3 rounded-[40px] transition-all group relative
                    ${activeTab.categoryId === cat.id 
                      ? 'bg-[#fecdd3] text-[#be123c] clay-button' 
                      : 'text-[#94a3b8] hover:bg-[#fff5f5] hover:text-[#fb7185]'}
                  `}
                >
                  <span className={`transition-all duration-500 ${activeTab.categoryId === cat.id ? 'scale-125 rotate-6' : 'opacity-50'}`}>
                    {getIcon(cat.icon)}
                  </span>
                  <span className="font-bold text-sm text-left leading-snug">{cat.title}</span>
                </button>
                
                {cat.subCategories && activeTab.categoryId === cat.id && (
                  <div className="ml-12 mt-3 space-y-2 border-l-4 border-dashed border-[#fecdd3] pl-5 animate-in fade-in slide-in-from-top duration-300">
                    {cat.subCategories.map((sub) => (
                      <button
                        key={sub.id}
                        onClick={() => handleTabClick(cat.id, sub.id)}
                        className={`
                          w-full text-left px-4 py-2 text-xs rounded-full transition-all
                          ${activeTab.subCategoryId === sub.id 
                            ? 'bg-white text-[#e11d48] font-black clay-button shadow-md' 
                            : 'text-[#94a3b8] hover:text-[#fb7185] font-semibold'}
                        `}
                      >
                        {sub.title.length > 20 ? sub.title.substring(0, 18) + '...' : sub.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          
          <div className="px-4 pt-0 pb-0 bg-[#f8fafc] text-center border-t-2 border-dashed border-[#f1f5f9] leading-none">
            <img src="/data/LOGO.png" alt="LOGO" className="h-[140px] w-auto object-contain max-w-full block mx-auto" />
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main
        ref={mainContentRef}
        className={`flex-1 overflow-y-auto p-6 lg:p-12 relative z-10 custom-scrollbar min-w-0 ${isWideLayout ? 'lg:ml-80' : 'ml-0'}`}
      >
        {!sidebarVisible && (
          <button
            type="button"
            aria-label="開啟選單"
            onClick={() => setIsSidebarOpen(true)}
            className="fixed top-4 left-4 z-50 clay-button p-4 sm:p-5 bg-[#ffb5a7] text-white shadow-2xl"
          >
            <Menu size={26} />
          </button>
        )}

        {/* Dynamic Header Section */}
        <header className="mb-8 sm:mb-10 lg:mb-12 animate-in fade-in slide-in-from-top duration-1000">
          <div className="clay-card px-6 py-8 sm:p-10 bg-white/90 backdrop-blur-xl flex flex-col lg:flex-row justify-between items-center gap-6 sm:gap-8 border-b-8 border-[#f8fafc]">
            <div className="text-center lg:text-left flex-1 min-w-0">
              <h2 className="text-xl sm:text-2xl lg:text-4xl font-black text-[#4a4e69] tracking-tight leading-tight whitespace-nowrap">
                吉林吉安，守護交安，心安平安
              </h2>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mt-3">
                <div className="flex items-center gap-1.5 px-4 py-1.5 bg-[#ffecd2] text-[#d48c2c] rounded-full text-[10px] sm:text-[11px] font-black uppercase shadow-sm">
                  <Star size={12} className="fill-current" /> Safe Zone
                </div>
                <p className="text-[#94a3b8] text-[11px] sm:text-sm font-bold italic border-l-0 sm:border-l-2 border-[#e2e8f0] pl-0 sm:pl-4">
                  臺北市吉林國小 交通安全數位平台
                </p>
              </div>
            </div>
            <div className="hidden lg:flex gap-6">
               <div className="clay-button bg-[#a0c4ff] px-8 py-4 text-white font-black text-sm flex items-center gap-3 hover:bg-[#89b4ff]">
                  <Sun size={20} className="animate-spin-slow" /> 實時狀態：安全運作中
               </div>
            </div>
          </div>
        </header>

        <div className="max-w-6xl mx-auto space-y-16">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-4 animate-in fade-in slide-in-from-left duration-500">
            <div className="clay-button px-6 py-3 bg-white flex items-center gap-3 text-xs font-black text-[#94a3b8] hover:text-[#ffb5a7]">
              <School size={16} /> {activeCategory?.title}
            </div>
            {activeSubCategory && (
              <>
                <ChevronRight size={18} className="text-[#cbd5e1]" />
                <div className="clay-button px-6 py-3 bg-[#ffb5a7] text-white text-xs font-black shadow-lg">
                  {activeSubCategory.title}
                </div>
              </>
            )}
          </div>

          {/* Main Visual Content */}
          <div className="animate-in fade-in zoom-in-95 duration-1000">
            {activeTab.categoryId === 'safety-promotion' ? (
              <div className="space-y-8">
                <section className="clay-card relative min-h-[200px] overflow-hidden flex items-center group border-8 border-white">
                  <div className="absolute inset-0 z-0">
                    <img src="/data/0-0.png" alt="Hero" className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#a7c4a0]/95 via-[#c8d5c8]/60 to-transparent"></div>
                  </div>
                  
                  <div className="relative z-10 p-8 lg:p-16 max-w-3xl">
                    <div className="clay-button bg-[#b9fbc0] text-[#2d4a31] px-6 py-2.5 text-[11px] font-black w-fit mb-4 shadow-xl animate-bounce-slow">
                      <Sparkles size={14} className="mr-2" /> 最新消息
                    </div>
                    <h3 className="text-2xl sm:text-3xl lg:text-5xl font-black text-white leading-[1.05] mb-4 drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)] tracking-tight whitespace-nowrap">
                      交通安全教育宣導
                    </h3>
                    <p className="text-white/80 text-lg lg:text-xl font-bold leading-relaxed mb-0 max-w-xl">
                      走出吉林，探索世界，確實瞭解交通安全教育宣導、交通安全教育教材、宣導影片，建立每一個人的交通安全觀念。
                    </p>
                  </div>
                </section>

                {(activeTab.subCategoryId === '0-1' || !activeTab.subCategoryId) && (
                <>
                {/* 交通安全五大守則 */}
                <section className="clay-card p-12 bg-white border-8 border-white shadow-2xl">
                  <h4 className="text-3xl font-black text-[#4a4e69] mb-8 tracking-tight border-l-8 border-[#ffb5a7] pl-6">
                    一、交通安全五大守則
                  </h4>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="clay-button w-8 h-8 flex-shrink-0 flex items-center justify-center bg-[#ffb5a7] text-white font-black text-sm shadow-md">
                        1
                      </div>
                      <p className="text-lg font-bold text-[#4a4e69] leading-relaxed">
                        第一守則：熟悉路權、遵守法規。
                      </p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="clay-button w-8 h-8 flex-shrink-0 flex items-center justify-center bg-[#ffb5a7] text-white font-black text-sm shadow-md">
                        2
                      </div>
                      <p className="text-lg font-bold text-[#4a4e69] leading-relaxed">
                        第二守則：我看得見您，您看得見我，交通才會安全。
                      </p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="clay-button w-8 h-8 flex-shrink-0 flex items-center justify-center bg-[#ffb5a7] text-white font-black text-sm shadow-md">
                        3
                      </div>
                      <p className="text-lg font-bold text-[#4a4e69] leading-relaxed">
                        第三守則：謹守安全空間-不做沒有絕對安全把握的交通行為。
                      </p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="clay-button w-8 h-8 flex-shrink-0 flex items-center justify-center bg-[#ffb5a7] text-white font-black text-sm shadow-md">
                        4
                      </div>
                      <p className="text-lg font-bold text-[#4a4e69] leading-relaxed">
                        第四守則：利他的用路觀-不做妨礙他人安全與方便的交通行為。
                      </p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="clay-button w-8 h-8 flex-shrink-0 flex items-center justify-center bg-[#ffb5a7] text-white font-black text-sm shadow-md">
                        5
                      </div>
                      <p className="text-lg font-bold text-[#4a4e69] leading-relaxed">
                        第五守則：防衛兼顧的安全用路行為-不做事故的製造者，也不成為無辜的事故受害者。
                      </p>
                    </div>
                  </div>
                </section>
                </>
                )}

                {activeTab.subCategoryId === '0-2' && (
                <section className="clay-card p-12 bg-white border-8 border-white shadow-2xl">
                  <h4 className="text-3xl font-black text-[#4a4e69] mb-8 tracking-tight border-l-8 border-[#ffb5a7] pl-6">
                    交通安全教育影片
                  </h4>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="aspect-video w-full">
                      <iframe
                        className="w-full h-full rounded-[32px]"
                        src="https://www.youtube.com/embed/PlOejkYjCv4"
                        title="交通安全教育影片 1"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <div className="aspect-video w-full">
                      <iframe
                        className="w-full h-full rounded-[32px]"
                        src="https://www.youtube.com/embed/iUOGaQfanS0"
                        title="交通安全教育影片 2"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <div className="aspect-video w-full">
                      <iframe
                        className="w-full h-full rounded-[32px]"
                        src="https://www.youtube.com/embed/KRGZoGjyDl8"
                        title="交通安全教育影片 3"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <div className="aspect-video w-full">
                      <iframe
                        className="w-full h-full rounded-[32px]"
                        src="https://www.youtube.com/embed/8oxhXhPaGew"
                        title="交通安全教育影片 4"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <div className="aspect-video w-full">
                      <iframe
                        className="w-full h-full rounded-[32px]"
                        src="https://www.youtube.com/embed/ZySvfKse1G0"
                        title="交通安全教育影片 5"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <div className="aspect-video w-full">
                      <iframe
                        className="w-full h-full rounded-[32px]"
                        src="https://www.youtube.com/embed/2jjaGAIADLU"
                        title="交通安全教育影片 6"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <div className="aspect-video w-full">
                      <iframe
                        className="w-full h-full rounded-[32px]"
                        src="https://www.youtube.com/embed/S3CUbrC5IrY"
                        title="交通安全教育影片 7"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <div className="aspect-video w-full">
                      <iframe
                        className="w-full h-full rounded-[32px]"
                        src="https://www.youtube.com/embed/xIusVrJhz4g"
                        title="交通安全教育影片 8"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </section>
                )}

                {(activeTab.subCategoryId === '0-1' || !activeTab.subCategoryId) && (
                <section className="clay-card p-12 bg-white border-8 border-white shadow-2xl">
                  <h4 className="text-3xl font-black text-[#4a4e69] mb-8 tracking-tight border-l-8 border-[#a0c4ff] pl-6">
                    二、交通安全五大運動
                  </h4>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="clay-button w-8 h-8 flex-shrink-0 flex items-center justify-center bg-[#a0c4ff] text-white font-black text-sm shadow-md">
                        1
                      </div>
                      <p className="text-lg font-bold text-[#4a4e69] leading-relaxed">
                        車頭朝外停車：不撞行人、迅速逃生、方便充電。
                      </p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="clay-button w-8 h-8 flex-shrink-0 flex items-center justify-center bg-[#a0c4ff] text-white font-black text-sm shadow-md">
                        2
                      </div>
                      <p className="text-lg font-bold text-[#4a4e69] leading-relaxed">
                        乘客責任：協助駕駛人清醒與專心、全車生命保障。
                      </p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="clay-button w-8 h-8 flex-shrink-0 flex items-center justify-center bg-[#a0c4ff] text-white font-black text-sm shadow-md">
                        3
                      </div>
                      <p className="text-lg font-bold text-[#4a4e69] leading-relaxed">
                        下車時向公車及計程車司機說「謝謝」：感恩鼓勵。
                      </p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="clay-button w-8 h-8 flex-shrink-0 flex items-center justify-center bg-[#a0c4ff] text-white font-black text-sm shadow-md">
                        4
                      </div>
                      <p className="text-lg font-bold text-[#4a4e69] leading-relaxed">
                        對禮讓行人的車輛駕駛揮手點頭致謝：感謝與感動。
                      </p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="clay-button w-8 h-8 flex-shrink-0 flex items-center justify-center bg-[#a0c4ff] text-white font-black text-sm shadow-md">
                        5
                      </div>
                      <p className="text-lg font-bold text-[#4a4e69] leading-relaxed">
                        婦孺安全地穿越路口：公平正義與人性。
                      </p>
                    </div>
                  </div>

                  <div className="mt-10 p-8 clay-card bg-[#fffcfc] border-[#fff5f5] border-4 space-y-4">
                    <h5 className="text-2xl font-black text-[#4a4e69] tracking-tight">
                      小綠人亮起 ✅ 安心通行，但別只看秒數 ⏱️
                    </h5>
                    <p className="text-[#4a4e69] text-lg font-bold leading-relaxed">
                      過馬路請記得「左看、右看、再左看」👀，先觀察路口環境，確認無來車再前進 🚶🚶。
                    </p>
                    <div className="space-y-3">
                      <p className="text-[#be123c] text-lg font-black">👉 小綠人閃爍時：</p>
                      <ul className="space-y-2 text-[#4a4e69] text-base font-bold leading-relaxed pl-6 list-disc">
                        <li>⚠️ 代表通行時間即將結束，不是催你奔跑。</li>
                        <li>✏️ 還沒踏上斑馬線，請先停下 🛑，在人行道上安全等候下一個綠燈。</li>
                        <li>✏️ 已在路口中，請儘速、安全通過路口。</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <p className="text-[#be123c] text-lg font-black">👉 等候過馬路時請記得：</p>
                      <ul className="space-y-2 text-[#4a4e69] text-base font-bold leading-relaxed pl-6 list-disc">
                        <li>站在行人穿越道後方，避開轉彎車動線（避免內輪差）。</li>
                        <li>提高警覺，隨時注意周遭來車。</li>
                      </ul>
                    </div>
                    <p className="text-[#4a4e69] text-lg font-black leading-relaxed">
                      安全不是靠運氣，而是靠「看得見彼此」👀。你我多一眼，安全多一點 ❤️ 平安到家最重要。
                    </p>
                  </div>

                  <div className="mt-8 p-8 clay-card bg-[#f8fbff] border-[#dbeafe] border-4 space-y-5">
                    <h5 className="text-2xl font-black text-[#4a4e69] tracking-tight">
                      臺北市學齡少年自行車事故統計重點（112年1月至115年2月）
                    </h5>
                    <p className="text-[#4a4e69] text-lg font-bold leading-relaxed">
                      統計顯示，學齡少年（7-18歲）騎乘自行車交通事故共 1,433 件，造成 1 人死亡、1,009 人受傷。
                    </p>

                    <div className="space-y-2">
                      <p className="text-[#1d4ed8] text-lg font-black">（一）主要肇事原因（前10項）</p>
                      <ol className="space-y-1 text-[#4a4e69] text-base font-bold leading-relaxed pl-6 list-decimal">
                        <li>未注意車前狀況</li>
                        <li>其他不當駕車行為</li>
                        <li>未依規定讓車</li>
                        <li>左轉彎未依規定</li>
                        <li>起步時未注意安全</li>
                        <li>違反號誌管制或指揮</li>
                        <li>違反特定標誌（線）禁制</li>
                        <li>變換車道或方向不當</li>
                        <li>逆向行駛</li>
                        <li>未靠右行駛</li>
                      </ol>
                    </div>

                    <div className="space-y-2">
                      <p className="text-[#1d4ed8] text-lg font-black">（二）肇事年齡層</p>
                      <ul className="space-y-1 text-[#4a4e69] text-base font-bold leading-relaxed pl-6 list-disc">
                        <li>13-15歲（國中學齡）：417 人</li>
                        <li>16-18歲（高中學齡）：316 人</li>
                        <li>7-12歲（國小學齡）：174 人</li>
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <p className="text-[#1d4ed8] text-lg font-black">（三）肇事位置</p>
                      <ul className="space-y-1 text-[#4a4e69] text-base font-bold leading-relaxed pl-6 list-disc">
                        <li>交叉路口：52.72%</li>
                        <li>路段：25.10%</li>
                        <li>自行車道：13.81%</li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <p className="text-[#be123c] text-lg font-black">🚴‍♀️【安全騎乘，從你我開始】🚦</p>
                      <ul className="space-y-2 text-[#4a4e69] text-base font-bold leading-relaxed pl-6 list-disc">
                        <li>車道上靠右行駛、不闖紅燈、不逆向。</li>
                        <li>雙手握把，不滑手機、不戴耳機。</li>
                        <li>轉彎記得打手勢，夜間開燈更安全。</li>
                        <li>安全帽、亮色衣物、車燈與反光片缺一不可。</li>
                        <li>人車共道人行道，車靠外、人靠內，並禮讓行人。</li>
                      </ul>
                    </div>
                  </div>

                  {/* 交通安全標誌互動學習區塊（嵌入 SVG 網頁） */}
                  <div className="mt-12">
                    <h5 className="text-2xl font-black text-[#4a4e69] mb-4 tracking-tight">
                      交通安全標誌互動學習
                    </h5>
                    <p className="text-[#64748b] text-sm font-bold mb-6">
                      透過互動式路口圖，點選各種標線與號誌，認識它們的名稱與功能。
                    </p>
                    <div className="clay-card p-4 bg-white border-4 border-[#e2e8f0] shadow-xl">
                      <iframe
                        src="/data/traffic_signs.svg"
                        title="交通安全標誌互動學習"
                        className="w-full max-w-full"
                        style={{ height: '600px', border: 'none' }}
                      />
                    </div>
                    <div className="mt-8">
                      <div className="clay-card p-2 bg-white border-4 border-[#e2e8f0] shadow-xl overflow-hidden rounded-[28px]">
                        <img
                          src="/data/0-0-2.png"
                          alt="交通安全宣導"
                          className="w-full h-auto object-contain block"
                        />
                      </div>
                    </div>
                  </div>
                </section>
                )}

                {activeTab.subCategoryId === '0-3' && (
                <div className="grid md:grid-cols-3 gap-10">
                  {[
                    { icon: <Youtube size={48} />, title: '交通安全e網通', color: '#ffadad', desc: '最新資訊都在此', link: 'https://www.roadsafety.taipei/' },
                    { icon: <ImageIcon size={48} />, title: '臺北市政府交通局', color: '#ffd6a5', desc: '臺北交通安心行', link: 'https://dot.gov.taipei/News.aspx?n=49485DDB31F5CB17&sms=C012E6AFD9E4E009' },
                    { icon: <ScrollText size={48} />, title: '靖娟兒童安全文教基金會', color: '#fdffb6', desc: '交通安全教材包', link: 'https://www.safe.org.tw/news-detail/135__1/' },
                    { icon: <Globe size={48} />, title: '168交通安全入口網', color: '#caffbf', desc: '交通安全主題與教材', link: 'https://168.motc.gov.tw/' },
                    { icon: <Laptop size={48} />, title: '教育部教育雲之「數位學習入口網」', color: '#bde0fe', desc: '交通安全教育線上課程教材', link: 'https://elearning.cloud.edu.tw/' },
                    { icon: <BookOpenCheck size={48} />, title: '教育部教育雲之「教育大市集」', color: '#d9f99d', desc: '交通安全教育線上課程教材', link: 'https://market.cloud.edu.tw/' },
                    { icon: <Presentation size={48} />, title: '教育部教育雲之「教育媒體影音」', color: '#e9d5ff', desc: '交通安全教育線上課程教材', link: 'https://market.cloud.edu.tw/video/' },
                    { icon: <School size={48} />, title: '教育部因材網交通安全專區', color: '#fecaca', desc: '因材網學習資源', link: 'https://adl.edu.tw/HomePage/home/' },
                    { icon: <FileSpreadsheet size={48} />, title: 'CIRN 國民中小學課程與教學資源整合平臺', color: '#bfdbfe', desc: '課程與教學整合資源', link: 'https://cirn.moe.edu.tw/WebNews/details.aspx?sid=1106&mid=5638&nid=3073' }
                  ].map((card, i) => {
                    const CardContent = (
                      <div className="clay-card p-12 bg-white flex flex-col items-center text-center gap-8 group hover:bg-[#fff9f9]">
                        <div className="clay-button p-8 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-xl" style={{ backgroundColor: card.color }}>
                          {card.icon}
                        </div>
                        <div>
                          <h4 className="text-2xl font-black text-[#4a4e69] mb-3 tracking-tight">{card.title}</h4>
                          <p className="text-[#94a3b8] text-sm font-bold leading-relaxed px-4">{card.desc}</p>
                        </div>
                      </div>
                    );
                    
                    return card.link ? (
                      <a key={i} href={card.link} target="_blank" rel="noopener noreferrer" className="block">
                        {CardContent}
                      </a>
                    ) : (
                      <div key={i}>{CardContent}</div>
                    );
                  })}
                </div>
                )}
              </div>
            ) : activeTab.categoryId === 'basic-info' ? (
              <div className="space-y-16">
                <section>
                  <div className="flex items-center gap-5 mb-10">
                    <div className="clay-button p-5 bg-[#ffd6a5] rotate-6 shadow-lg">
                      <MapPin size={32} className="text-[#7a5b35]" />
                    </div>
                    <h3 className="text-4xl font-black text-[#4a4e69] tracking-tight">一、 學校位置與環境導覽</h3>
                  </div>
                  
                  {/* School Location Image */}
                  <div className="mb-10">
                    <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                      <img 
                        src="/data/0-1.png" 
                        alt="學校位置與環境導覽" 
                        className="w-full h-auto rounded-[32px] object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="grid lg:grid-cols-3 gap-10">
                    <div className="clay-card p-12 bg-white lg:col-span-2 space-y-10 border-r-8 border-[#f8fafc]">
                      {[
                        { num: 1, title: '核心地理位置', color: '#caffbf', text: '座落於中山區繁華地帶，吉林路與長春路交叉口，是交通動脈的匯流處。' },
                        { num: 2, title: '文教生活圈', color: '#bdb2ff', text: '鄰近長安國中及多家知名語文中心，學區氛圍濃厚，治安與環境品質俱佳。' },
                        { num: 3, title: '社教資源網', color: '#a0c4ff', text: '周邊圍繞樹火紙、袖珍、北美館及行天宮圖書館，提供豐富的課外學習場域。' }
                      ].map((item) => (
                        <div key={item.num} className="flex items-start gap-6 group">
                          <div className={`w-14 h-14 clay-button flex-shrink-0 flex items-center justify-center font-black text-xl shadow-md transition-all group-hover:scale-110`} style={{ backgroundColor: item.color }}>
                            {item.num}
                          </div>
                          <div>
                            <h4 className="font-black text-xl text-[#4a4e69] mb-2">{item.title}</h4>
                            <p className="text-[#94a3b8] font-bold text-lg leading-relaxed">{item.text}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="clay-card p-12 bg-[#fefae0] flex flex-col gap-10 justify-center items-center text-center shadow-xl border-8 border-white">
                      <div className="clay-button p-10 bg-white scale-125 shadow-2xl animate-float">
                        <Building2 size={80} className="text-[#d4a373]" />
                      </div>
                      <div className="pt-6">
                        <p className="text-5xl font-black text-[#6d4c41] tracking-tighter">31,290 <span className="text-lg opacity-40">m²</span></p>
                        <p className="text-[#94a3b8] font-black text-xs uppercase tracking-[0.3em] mt-3">校園總面積數據</p>
                      </div>
                    </div>
                  </div>
                </section>
                
                <section>
                  <div className="flex items-center gap-5 mb-10">
                    <div className="clay-button p-5 bg-[#bdb2ff] -rotate-3 shadow-lg">
                      <BarChart3 size={32} className="text-white" />
                    </div>
                    <h3 className="text-4xl font-black text-[#4a4e69] tracking-tight">二、 通勤數據可視化</h3>
                  </div>
                  <div className="clay-card p-16 bg-white border-8 border-white shadow-2xl">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
                      <h4 className="font-black text-2xl text-[#4a4e69] border-l-8 border-[#ffb5a7] pl-6">上下學方式對照分析</h4>
                      <div className="flex gap-4">
                        <span className="px-4 py-1.5 bg-[#fef2f2] text-[#ef4444] rounded-full text-xs font-black">2025 年度統計資料</span>
                      </div>
                    </div>
                    <div className="h-[450px] w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={transportData} barGap={16}>
                          <CartesianGrid strokeDasharray="6 6" vertical={false} stroke="#f1f5f9" />
                          <XAxis dataKey="name" fontSize={14} tick={{ fill: '#94a3b8', fontWeight: 900 }} axisLine={false} tickLine={false} dy={15} />
                          <YAxis unit="%" tick={{ fill: '#94a3b8', fontWeight: 700 }} axisLine={false} tickLine={false} />
                          <Tooltip 
                            contentStyle={{ borderRadius: '32px', border: 'none', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', fontWeight: 900, padding: '20px' }}
                            cursor={{ fill: '#f8fafc', radius: 20 }}
                          />
                          <Legend verticalAlign="top" align="right" height={60} iconType="circle" iconSize={12} wrapperStyle={{ paddingBottom: '20px', fontWeight: 900 }} />
                          <Bar dataKey="上學" fill="#ffb5a7" radius={[20, 20, 0, 0]} />
                          <Bar dataKey="放學" fill="#a0c4ff" radius={[20, 20, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </section>
                
                <section>
                  <div className="flex items-center gap-5 mb-10">
                    <div className="clay-button p-5 bg-[#a0c4ff] rotate-3 shadow-lg">
                      <Navigation size={32} className="text-white" />
                    </div>
                    <h3 className="text-4xl font-black text-[#4a4e69] tracking-tight">三、 主要道路上放學交通規劃</h3>
                  </div>
                  <div className="clay-card p-16 bg-white border-8 border-white shadow-2xl mb-8">
                    <div className="h-[450px] w-full">
                      <img 
                        src="/data/0-4.png" 
                        alt="主要道路上放學交通規劃" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="clay-card p-16 bg-white border-8 border-white shadow-2xl">
                    <div className="h-[450px] w-full">
                      <img 
                        src="/data/0-5.png" 
                        alt="主要道路上放學交通規劃" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  {/* 0-5 圖下方補充 0-4-2 ~ 0-4-5 圖片 */}
                  <div className="clay-card p-8 bg-white border-8 border-white shadow-2xl mt-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      {['0-4-2.png', '0-4-3.png', '0-4-4.png', '0-4-5.png'].map((fileName) => (
                        <div key={fileName} className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-xl">
                          <img 
                            src={`/data/${fileName}`} 
                            alt="主要道路上放學交通規劃補充圖片" 
                            className="w-full h-auto rounded-[32px] object-contain"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              </div>
            ) : (
              /* Enhanced Subcategory Detail View */
              <div className="clay-card p-16 bg-white relative overflow-hidden group border-8 border-white shadow-2xl animate-in zoom-in duration-700">
                {/* Decorative background icon */}
                <div className="absolute -top-16 -right-16 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-1000 rotate-12">
                  {activeCategory ? React.cloneElement(getIcon(activeCategory.icon) as React.ReactElement<any>, { size: 400 }) : null}
                </div>
                
                <div className="flex flex-col lg:flex-row items-center gap-10 mb-16 pb-12 border-b-4 border-dashed border-[#f1f5f9] relative z-10">
                  <div className="clay-button p-8 bg-[#fcd5ce] scale-110 shadow-xl">
                    {activeCategory ? React.cloneElement(getIcon(activeCategory.icon) as React.ReactElement<any>, { size: 48, className: "text-[#be123c]" }) : null}
                  </div>
                  <div className="text-center lg:text-left">
                    <h3 className="text-5xl font-black text-[#4a4e69] tracking-tighter mb-2">
                      {activeSubCategory ? activeSubCategory.title : activeCategory?.title}
                    </h3>
                    <p className="text-[#94a3b8] font-bold text-lg uppercase tracking-[0.2em]">{activeCategory?.title}</p>
                  </div>
                </div>

                <div className="space-y-16 relative z-10">
                  {/* Summary cards for 3-2 subcategory (show before text) */}
                  {activeTab.subCategoryId === '3-2' && (
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="clay-card bg-white p-6 border-4 border-[#e2e8f0] flex flex-col items-center text-center gap-3">
                        <div className="w-14 h-14 clay-button bg-[#dbeafe] flex items-center justify-center text-[#1d4ed8] shadow-lg">
                          <MapPin size={28} />
                        </div>
                        <h4 className="text-lg font-black text-[#4a4e69]">人車分流</h4>
                        <p className="text-sm font-bold text-[#64748b]">學生統一大門放學，減少人車交織風險。</p>
                      </div>
                      <div className="clay-card bg-white p-6 border-4 border-[#e2e8f0] flex flex-col items-center text-center gap-3">
                        <div className="w-14 h-14 clay-button bg-[#fee2e2] flex items-center justify-center text-[#be123c] shadow-lg">
                          <UserCheck size={28} />
                        </div>
                        <h4 className="text-lg font-black text-[#4a4e69]">放學控管</h4>
                        <p className="text-sm font-bold text-[#64748b]">各樓層交通服務隊協助班級分流與秩序管理。</p>
                      </div>
                      <div className="clay-card bg-white p-6 border-4 border-[#e2e8f0] flex flex-col items-center text-center gap-3">
                        <div className="w-14 h-14 clay-button bg-[#dcfce7] flex items-center justify-center text-[#15803d] shadow-lg">
                          <ShieldAlert size={28} />
                        </div>
                        <h4 className="text-lg font-black text-[#4a4e69]">路口守護</h4>
                        <p className="text-sm font-bold text-[#64748b]">導護志工與義交於路口協助，提升通學安全。</p>
                      </div>
                    </div>
                  )}

                  {/* Data visualization for 3-1 subcategory */}
                  {activeTab.subCategoryId === '3-1' && (
                    <div className="clay-card p-10 bg-white border-4 border-[#e2e8f0] shadow-2xl">
                      <h4 className="text-2xl font-black text-[#4a4e69] mb-3 tracking-tight">
                        通學方式比較分析圖
                      </h4>
                      <p className="text-[#64748b] text-sm font-bold mb-8">
                        以百分比比較上學與放學通學方式，快速掌握接送型態差異與交通管理重點。
                      </p>
                      <div className="h-[360px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={transportData} barGap={12}>
                            <CartesianGrid strokeDasharray="6 6" vertical={false} stroke="#e2e8f0" />
                            <XAxis
                              dataKey="name"
                              fontSize={12}
                              tick={{ fill: '#64748b', fontWeight: 800 }}
                              axisLine={false}
                              tickLine={false}
                              dy={10}
                            />
                            <YAxis
                              unit="%"
                              tick={{ fill: '#64748b', fontWeight: 700 }}
                              axisLine={false}
                              tickLine={false}
                            />
                            <Tooltip
                              contentStyle={{
                                borderRadius: '20px',
                                border: 'none',
                                boxShadow: '0 12px 30px rgba(0,0,0,0.1)',
                                fontWeight: 800,
                              }}
                            />
                            <Legend verticalAlign="top" height={40} iconType="circle" />
                            <Bar dataKey="上學" fill="#ffb5a7" radius={[10, 10, 0, 0]} />
                            <Bar dataKey="放學" fill="#93c5fd" radius={[10, 10, 0, 0]} />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  )}

                  <div className="p-12 clay-card bg-[#fffcfc] border-[#fff5f5] border-4 relative">
                    <div className="absolute -top-4 -left-4 clay-button bg-[#be123c] text-white p-3 shadow-lg">
                      <ScrollText size={20} />
                    </div>
                    <div className="text-[#4a4e69] text-2xl font-bold leading-relaxed text-left space-y-4">
                      {activeTab.subCategoryId === '2-2' ? (
                        <div className="space-y-5">
                          <div className="space-y-3">
                            <div className="grid md:grid-cols-3 gap-6">
                              {[
                                { icon: <Layout size={30} />, title: '1.', line: '校園交通標誌與宣導佈置' },
                                { icon: <Bus size={30} />, title: '2.', line: '校外教學車輛逃生演練' },
                                { icon: <FileCheck size={30} />, title: '3.', line: '行前說明文件與注意事項' },
                              ].map((item) => (
                                <div key={item.title} className="clay-card bg-white p-6 border-4 border-[#f8fafc] flex flex-col items-center gap-4 text-center transition-all duration-300 hover:translate-y-[-5px] hover:border-[#ffb5a7]">
                                  <div className="w-14 h-14 clay-button bg-[#ffb5a7] flex items-center justify-center text-white shadow-lg">
                                    {item.icon}
                                  </div>
                                  <p className="font-black text-[#881337] text-base leading-snug">
                                    {item.title}<br />{item.line}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                          <h4 className="text-3xl font-black tracking-tight">交通情境設置與校外教學安全實作</h4>
                          <div className="space-y-4">
                            <div className="flex items-start gap-3">
                              <div className="w-9 h-9 clay-button bg-[#ffb5a7] flex items-center justify-center text-white shadow-md flex-shrink-0">
                                <CheckCircle2 size={18} />
                              </div>
                              <p className="text-xl font-bold leading-relaxed">
                                <span className="font-black">推動主軸：</span>本校以「校內情境佈置」與「校外活動演練」雙軌推動交通安全教育，讓學生從認識規則、實際操作到行前準備，建立完整且可落實的安全行動能力。
                              </p>
                            </div>
                            <div className="flex items-start gap-3">
                              <div className="w-9 h-9 clay-button bg-[#ffb5a7] flex items-center justify-center text-white shadow-md flex-shrink-0">
                                <Layout size={18} />
                              </div>
                              <p className="text-xl font-bold leading-relaxed">
                                <span className="font-black">校內情境：</span>透過交通標誌、宣導海報與安全標語，讓學生在日常生活中持續接觸、辨識並理解交通資訊。
                              </p>
                            </div>
                            <div className="flex items-start gap-3">
                              <div className="w-9 h-9 clay-button bg-[#ffb5a7] flex items-center justify-center text-white shadow-md flex-shrink-0">
                                <Bus size={18} />
                              </div>
                              <p className="text-xl font-bold leading-relaxed">
                                <span className="font-black">校外實作：</span>藉由車輛逃生演練與行前重點提醒，強化應變能力與自我保護觀念，將交通安全真正落實在每一次的活動學習中。
                              </p>
                            </div>
                          </div>
                        </div>
                      ) : (
                        activeSubCategory ? activeSubCategory.content : activeCategory?.content
                      )}
                    </div>
                  </div>

                  {/* Course Content Chart for 2-1 subcategory */}
                  {activeTab.subCategoryId === '2-1' && (
                    <div className="clay-card p-8 bg-white border-4 border-[#fff5f5] shadow-xl">
                      <div className="mb-6">
                        <h4 className="text-2xl font-black text-[#4a4e69] mb-2 text-center lg:text-left">以學生生活情境為學習重點，將交通安全知能落實在生活中。</h4>
                      </div>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="clay-card bg-[#fff9f9] p-6 border-4 border-[#f8fafc] flex flex-col items-start gap-4 transition-all duration-300 hover:translate-y-[-5px] hover:border-[#ffb5a7] hover:shadow-lg">
                          <div className="flex items-center gap-4 w-full">
                            <div className="w-12 h-12 clay-button bg-[#ffb5a7] flex items-center justify-center text-white shadow-lg flex-shrink-0">
                              <User size={24} />
                            </div>
                            <div className="flex-1">
                              <p className="font-black text-[#881337] text-base leading-snug">
                                1. 行路安全和遵守交通規則
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="clay-card bg-[#fff9f9] p-6 border-4 border-[#f8fafc] flex flex-col items-start gap-4 transition-all duration-300 hover:translate-y-[-5px] hover:border-[#ffb5a7] hover:shadow-lg">
                          <div className="flex items-center gap-4 w-full">
                            <div className="w-12 h-12 clay-button bg-[#ffb5a7] flex items-center justify-center text-white shadow-lg flex-shrink-0">
                              <Car size={24} />
                            </div>
                            <div className="flex-1">
                              <p className="font-black text-[#881337] text-base leading-snug">
                                2. 乘坐機車的安全和汽車的安全
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="clay-card bg-[#fff9f9] p-6 border-4 border-[#f8fafc] flex flex-col items-start gap-4 transition-all duration-300 hover:translate-y-[-5px] hover:border-[#ffb5a7] hover:shadow-lg">
                          <div className="flex items-center gap-4 w-full">
                            <div className="w-12 h-12 clay-button bg-[#ffb5a7] flex items-center justify-center text-white shadow-lg flex-shrink-0">
                              <TrafficCone size={24} />
                            </div>
                            <div className="flex-1">
                              <p className="font-black text-[#881337] text-base leading-snug">
                                3. 行人安全過路口(含無號誌路口)
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="clay-card bg-[#fff9f9] p-6 border-4 border-[#f8fafc] flex flex-col items-start gap-4 transition-all duration-300 hover:translate-y-[-5px] hover:border-[#ffb5a7] hover:shadow-lg">
                          <div className="flex items-center gap-4 w-full">
                            <div className="w-12 h-12 clay-button bg-[#ffb5a7] flex items-center justify-center text-white shadow-lg flex-shrink-0">
                              <Bike size={24} />
                            </div>
                            <div className="flex-1">
                              <p className="font-black text-[#881337] text-base leading-snug">
                                4. 自行車教育
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="clay-card bg-[#fff9f9] p-6 border-4 border-[#f8fafc] flex flex-col items-start gap-4 transition-all duration-300 hover:translate-y-[-5px] hover:border-[#ffb5a7] hover:shadow-lg md:col-span-2 lg:col-span-1">
                          <div className="flex items-center gap-4 w-full">
                            <div className="w-12 h-12 clay-button bg-[#ffb5a7] flex items-center justify-center text-white shadow-lg flex-shrink-0">
                              <Bus size={24} />
                            </div>
                            <div className="flex-1">
                              <p className="font-black text-[#881337] text-base leading-snug">
                                5. 大眾運輸工具
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Images for 2-1 subcategory */}
                  {activeTab.subCategoryId === '2-1' && (
                    <>
                    <h3 className="text-2xl md:text-3xl font-black text-[#881337] mb-6">
                      一年級交通安全課程
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                        <img
                          src="/data/2-1-1-1.jpg"
                          alt="一年級交通安全課程成果照片1"
                          className="w-full h-[280px] rounded-[32px] object-contain bg-white"
                        />
                      </div>
                      <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                        <img
                          src="/data/2-1-1-2.png"
                          alt="一年級交通安全課程成果照片2"
                          className="w-full h-[280px] rounded-[32px] object-contain bg-white"
                        />
                      </div>
                      <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                        <img
                          src="/data/2-1-1-3.png"
                          alt="一年級交通安全課程成果照片3"
                          className="w-full h-[280px] rounded-[32px] object-contain bg-white"
                        />
                      </div>
                      <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                        <img
                          src="/data/2-1-1-4.jpg"
                          alt="一年級交通安全課程成果照片4"
                          className="w-full h-[280px] rounded-[32px] object-contain bg-white"
                        />
                      </div>
                      <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                        <img
                          src="/data/2-1-1-5.jpg"
                          alt="一年級交通安全課程成果照片5"
                          className="w-full h-[280px] rounded-[32px] object-contain bg-white"
                        />
                      </div>
                      <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                        <img
                          src="/data/2-1-1-6.jpg"
                          alt="一年級交通安全課程成果照片6"
                          className="w-full h-[280px] rounded-[32px] object-contain bg-white"
                        />
                      </div>
                      <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                        <img
                          src="/data/2-1-1-7.jpg"
                          alt="一年級交通安全課程成果照片7"
                          className="w-full h-[280px] rounded-[32px] object-contain bg-white"
                        />
                      </div>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black text-[#881337] mb-6">
                      二年級交通安全課程
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                        <img src="/data/2-1-2-1.jpg" alt="二年級交通安全課程成果照片1" className="w-full h-[280px] rounded-[32px] object-contain bg-white" />
                      </div>
                      <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                        <img src="/data/2-1-2-2.jpg" alt="二年級交通安全課程成果照片2" className="w-full h-[280px] rounded-[32px] object-contain bg-white" />
                      </div>
                      <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                        <img src="/data/2-1-2-3.png" alt="二年級交通安全課程成果照片3" className="w-full h-[280px] rounded-[32px] object-contain bg-white" />
                      </div>
                      <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                        <img src="/data/2-1-2-4.jpg" alt="二年級交通安全課程成果照片4" className="w-full h-[280px] rounded-[32px] object-contain bg-white" />
                      </div>
                      <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                        <img src="/data/2-1-2-5.jpg" alt="二年級交通安全課程成果照片5" className="w-full h-[280px] rounded-[32px] object-contain bg-white" />
                      </div>
                      <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                        <img src="/data/2-1-2-6.jpg" alt="二年級交通安全課程成果照片6" className="w-full h-[280px] rounded-[32px] object-contain bg-white" />
                      </div>
                      <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                        <img src="/data/2-1-2-7.jpg" alt="二年級交通安全課程成果照片7" className="w-full h-[280px] rounded-[32px] object-contain bg-white" />
                      </div>
                      <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                        <img src="/data/2-1-2-8.jpg" alt="二年級交通安全課程成果照片8" className="w-full h-[280px] rounded-[32px] object-contain bg-white" />
                      </div>
                      <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                        <img src="/data/2-1-2-9.jpg" alt="二年級交通安全課程成果照片9" className="w-full h-[280px] rounded-[32px] object-contain bg-white" />
                      </div>
                      <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                        <img src="/data/2-1-2-10.jpg" alt="二年級交通安全課程成果照片10" className="w-full h-[280px] rounded-[32px] object-contain bg-white" />
                      </div>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black text-[#881337] mb-6">
                      五年級交通安全課程
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                        <img
                          src="/data/2-1-5-1.jpg"
                          alt="五年級交通安全課程成果照片1"
                          className="w-full h-[280px] rounded-[32px] object-contain bg-white"
                        />
                      </div>
                      <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                        <img
                          src="/data/2-1-5-2.jpg"
                          alt="五年級交通安全課程成果照片2"
                          className="w-full h-[280px] rounded-[32px] object-contain bg-white"
                        />
                      </div>
                      <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                        <img
                          src="/data/2-1-5-3.jpg"
                          alt="五年級交通安全課程成果照片3"
                          className="w-full h-[280px] rounded-[32px] object-contain bg-white"
                        />
                      </div>
                      <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                        <img
                          src="/data/2-1-5-4.jpg"
                          alt="五年級交通安全課程成果照片4"
                          className="w-full h-[280px] rounded-[32px] object-contain bg-white"
                        />
                      </div>
                      <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                        <img
                          src="/data/2-1-5-5.jpg"
                          alt="五年級交通安全課程成果照片5"
                          className="w-full h-[280px] rounded-[32px] object-contain bg-white"
                        />
                      </div>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black text-[#881337] mb-6">
                      六年級交通安全課程vs校長愛的叮嚀
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                        <img src="/data/2-1-6-1.jpg" alt="六年級交通安全課程vs校長愛的叮嚀成果照片1" className="w-full h-[280px] rounded-[32px] object-contain bg-white" />
                      </div>
                      <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                        <img src="/data/2-1-6-2.jpg" alt="六年級交通安全課程vs校長愛的叮嚀成果照片2" className="w-full h-[280px] rounded-[32px] object-contain bg-white" />
                      </div>
                      <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                        <img src="/data/2-1-6-3.jpg" alt="六年級交通安全課程vs校長愛的叮嚀成果照片3" className="w-full h-[280px] rounded-[32px] object-contain bg-white" />
                      </div>
                      <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                        <img src="/data/2-1-6-4.jpg" alt="六年級交通安全課程vs校長愛的叮嚀成果照片4" className="w-full h-[280px] rounded-[32px] object-contain bg-white" />
                      </div>
                      <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                        <img src="/data/2-1-6-5.jpg" alt="六年級交通安全課程vs校長愛的叮嚀成果照片5" className="w-full h-[280px] rounded-[32px] object-contain bg-white" />
                      </div>
                      <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                        <img src="/data/2-1-6-6.jpg" alt="六年級交通安全課程vs校長愛的叮嚀成果照片6" className="w-full h-[280px] rounded-[32px] object-contain bg-white" />
                      </div>
                      <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                        <img src="/data/2-1-6-7.jpg" alt="六年級交通安全課程vs校長愛的叮嚀成果照片7" className="w-full h-[280px] rounded-[32px] object-contain bg-white" />
                      </div>
                      <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                        <img src="/data/2-1-6-8.jpg" alt="六年級交通安全課程vs校長愛的叮嚀成果照片8" className="w-full h-[280px] rounded-[32px] object-contain bg-white" />
                      </div>
                      <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                        <img src="/data/2-1-6-9.jpg" alt="六年級交通安全課程vs校長愛的叮嚀成果照片9" className="w-full h-[280px] rounded-[32px] object-contain bg-white" />
                      </div>
                      <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                        <img src="/data/2-1-6-10.jpg" alt="六年級交通安全課程vs校長愛的叮嚀成果照片10" className="w-full h-[280px] rounded-[32px] object-contain bg-white" />
                      </div>
                      <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                        <img src="/data/2-1-6-11.jpg" alt="六年級交通安全課程vs校長愛的叮嚀成果照片11" className="w-full h-[280px] rounded-[32px] object-contain bg-white" />
                      </div>
                      <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                        <img src="/data/2-1-6-12.jpg" alt="六年級交通安全課程vs校長愛的叮嚀成果照片12" className="w-full h-[280px] rounded-[32px] object-contain bg-white" />
                      </div>
                      <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                        <img src="/data/2-1-6-13.jpg" alt="六年級交通安全課程vs校長愛的叮嚀成果照片13" className="w-full h-[280px] rounded-[32px] object-contain bg-white" />
                      </div>
                      <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                        <img src="/data/2-1-6-14.jpg" alt="六年級交通安全課程vs校長愛的叮嚀成果照片14" className="w-full h-[280px] rounded-[32px] object-contain bg-white" />
                      </div>
                      <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                        <img src="/data/2-1-6-15.jpg" alt="六年級交通安全課程vs校長愛的叮嚀成果照片15" className="w-full h-[280px] rounded-[32px] object-contain bg-white" />
                      </div>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black text-[#881337] mb-6">
                      生活英語課程融入交通安全
                    </h3>
                    <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                      <video 
                        src="/data/2-1-13.mp4" 
                        controls
                        className="w-full h-auto rounded-[32px]"
                        style={{ maxHeight: '600px' }}
                      >
                        您的瀏覽器不支援影片播放。
                      </video>
                    </div>
                    </>
                  )}

                  {/* Activity Cards for 2-3 subcategory */}
                  {activeTab.subCategoryId === '2-3' && (
                    <div className="grid md:grid-cols-4 gap-6">
                      <div className="clay-card bg-white p-6 border-4 border-[#f8fafc] flex flex-col items-center gap-4 text-center transition-all duration-300 hover:translate-y-[-5px] hover:border-[#ffb5a7]">
                        <div className="w-16 h-16 clay-button bg-[#ffb5a7] flex items-center justify-center text-white shadow-lg">
                          <Megaphone size={32} />
                        </div>
                        <p className="font-black text-[#881337] text-sm leading-snug">
                          1.<br />兒童朝會師長宣導
                        </p>
                      </div>
                      <div className="clay-card bg-white p-6 border-4 border-[#f8fafc] flex flex-col items-center gap-4 text-center transition-all duration-300 hover:translate-y-[-5px] hover:border-[#ffb5a7]">
                        <div className="w-16 h-16 clay-button bg-[#ffb5a7] flex items-center justify-center text-white shadow-lg">
                          <Presentation size={32} />
                        </div>
                        <p className="font-black text-[#881337] text-sm leading-snug">
                          2.<br />兒童朝會學生專題演講
                        </p>
                      </div>
                      <div className="clay-card bg-white p-6 border-4 border-[#f8fafc] flex flex-col items-center gap-4 text-center transition-all duration-300 hover:translate-y-[-5px] hover:border-[#ffb5a7]">
                        <div className="w-16 h-16 clay-button bg-[#ffb5a7] flex items-center justify-center text-white shadow-lg">
                          <GraduationCap size={32} />
                        </div>
                        <p className="font-black text-[#881337] text-sm leading-snug">
                          3.<br />邀請交通安全講師進行主題交安宣導
                        </p>
                      </div>
                      <div className="clay-card bg-white p-6 border-4 border-[#f8fafc] flex flex-col items-center gap-4 text-center transition-all duration-300 hover:translate-y-[-5px] hover:border-[#ffb5a7]">
                        <div className="w-16 h-16 clay-button bg-[#ffb5a7] flex items-center justify-center text-white shadow-lg">
                          <Users2 size={32} />
                        </div>
                        <p className="font-black text-[#881337] text-sm leading-snug">
                          4.<br />學校和警政單位合作入班宣導
                        </p>
                      </div>
                      <div className="clay-card bg-white p-6 border-4 border-[#f8fafc] flex flex-col items-center gap-4 text-center transition-all duration-300 hover:translate-y-[-5px] hover:border-[#ffb5a7]">
                        <div className="w-16 h-16 clay-button bg-[#ffb5a7] flex items-center justify-center text-white shadow-lg">
                          <Bike size={32} />
                        </div>
                        <p className="font-black text-[#881337] text-sm leading-snug">
                          5.<br />體表會趣味競賽結合腳踏車安全騎乘教育
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Image for innovation category */}
                  {activeTab.categoryId === 'innovation' && !activeTab.subCategoryId && (
                    <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                      <img 
                        src="/data/4-1-1.jpg" 
                        alt="創新與重大成效" 
                        className="w-full h-auto rounded-[32px] object-cover"
                      />
                    </div>
                  )}

                  {/* Images for 1-2 subcategory */}
                  {activeTab.subCategoryId === '1-2' && (
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="clay-card p-2 bg-white border-4 border-white shadow-2xl">
                        <img 
                          src="/data/1-2-2.jpg" 
                          alt="強化教師交通安全教育知能" 
                          className="w-full h-auto rounded-[32px] object-cover"
                        />
                        <p className="text-center text-[#64748b] font-semibold text-sm mt-2 mb-1">
                          交通安全委員會議
                        </p>
                      </div>
                      <div className="clay-card p-2 bg-white border-4 border-white shadow-2xl">
                        <img 
                          src="/data/1-2-3.jpg" 
                          alt="強化教師交通安全教育知能" 
                          className="w-full h-auto rounded-[32px] object-cover"
                        />
                        <p className="text-center text-[#64748b] font-semibold text-sm mt-2 mb-1">
                          教師研習進修規劃表
                        </p>
                      </div>
                      <div className="clay-card p-2 bg-white border-4 border-white shadow-2xl">
                        <img 
                          src="/data/1-2-4.jpg" 
                          alt="強化教師交通安全教育知能" 
                          className="w-full h-auto rounded-[32px] object-cover"
                        />
                        <p className="text-center text-[#64748b] font-semibold text-sm mt-2 mb-1">
                          交通安全講師教師研習
                        </p>
                      </div>
                      <div className="clay-card p-2 bg-white border-4 border-white shadow-2xl">
                        <img 
                          src="/data/1-2-5.jpg" 
                          alt="強化教師交通安全教育知能" 
                          className="w-full h-auto rounded-[32px] object-cover"
                        />
                        <p className="text-center text-[#64748b] font-semibold text-sm mt-2 mb-1">
                          交通安全講師教師研習
                        </p>
                      </div>
                      <div className="clay-card p-2 bg-white border-4 border-white shadow-2xl">
                        <img 
                          src="/data/1-2-6.jpg" 
                          alt="強化教師交通安全教育知能" 
                          className="w-full h-auto rounded-[32px] object-cover"
                        />
                        <p className="text-center text-[#64748b] font-semibold text-sm mt-2 mb-1">
                          交通安全講師教師研習
                        </p>
                      </div>
                      <div className="clay-card p-2 bg-white border-4 border-white shadow-2xl">
                        <img 
                          src="/data/1-2-7.jpg" 
                          alt="強化教師交通安全教育知能" 
                          className="w-full h-auto rounded-[32px] object-cover"
                        />
                        <p className="text-center text-[#64748b] font-semibold text-sm mt-2 mb-1">
                          警員交通安全教師研習
                        </p>
                      </div>
                      <div className="clay-card p-2 bg-white border-4 border-white shadow-2xl">
                        <img 
                          src="/data/1-2-8.jpg" 
                          alt="強化教師交通安全教育知能" 
                          className="w-full h-auto rounded-[32px] object-cover"
                        />
                        <p className="text-center text-[#64748b] font-semibold text-sm mt-2 mb-1">
                          警員交通安全教師研習
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Images for 1-3 subcategory */}
                  {activeTab.subCategoryId === '1-3' && (
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="clay-card p-2 bg-white border-4 border-white shadow-2xl">
                        <img 
                          src="/data/1-3-1.jpg" 
                          alt="向家長與社區民眾宣導" 
                          className="w-full h-auto rounded-[32px] object-cover"
                        />
                        <p className="text-center text-[#64748b] font-semibold text-sm mt-2 mb-1">
                          開學日警員校門口交通宣導
                        </p>
                      </div>
                      <div className="clay-card p-2 bg-white border-4 border-white shadow-2xl">
                        <img 
                          src="/data/1-3-1-1.jpg" 
                          alt="向家長與社區民眾宣導" 
                          className="w-full h-auto rounded-[32px] object-cover"
                        />
                        <p className="text-center text-[#64748b] font-semibold text-sm mt-2 mb-1">
                          開學日和社區派出所警員共同宣導交通安全
                        </p>
                      </div>
                      <div className="clay-card p-2 bg-white border-4 border-white shadow-2xl">
                        <img 
                          src="/data/1-3-1-2.jpg" 
                          alt="向家長與社區民眾宣導" 
                          className="w-full h-auto rounded-[32px] object-cover"
                        />
                        <p className="text-center text-[#64748b] font-semibold text-sm mt-2 mb-1">
                          開學日和社區派出所警員共同宣導交通安全
                        </p>
                      </div>
                      <div className="clay-card p-2 bg-white border-4 border-white shadow-2xl">
                        <img 
                          src="/data/1-3-2.jpg" 
                          alt="向家長與社區民眾宣導" 
                          className="w-full h-auto rounded-[32px] object-cover"
                        />
                        <p className="text-center text-[#64748b] font-semibold text-sm mt-2 mb-1">
                          開學迎新活動交通安全宣導
                        </p>
                      </div>
                      <div className="clay-card p-2 bg-white border-4 border-white shadow-2xl">
                        <img 
                          src="/data/1-3-3.jpg" 
                          alt="向家長與社區民眾宣導" 
                          className="w-full h-auto rounded-[32px] object-cover"
                        />
                        <p className="text-center text-[#64748b] font-semibold text-sm mt-2 mb-1">
                          60週年校慶里長里民交通安全宣導
                        </p>
                      </div>
                      <div className="clay-card p-2 bg-white border-4 border-white shadow-2xl">
                        <img 
                          src="/data/1-3-4.jpg" 
                          alt="向家長與社區民眾宣導" 
                          className="w-full h-auto rounded-[32px] object-cover"
                        />
                        <p className="text-center text-[#64748b] font-semibold text-sm mt-2 mb-1">
                          60週年校慶導護志工協助交通安全宣導
                        </p>
                      </div>
                      <div className="clay-card p-2 bg-white border-4 border-white shadow-2xl">
                        <img 
                          src="/data/1-3-5.jpg" 
                          alt="向家長與社區民眾宣導" 
                          className="w-full h-auto rounded-[32px] object-cover"
                        />
                        <p className="text-center text-[#64748b] font-semibold text-sm mt-2 mb-1">
                          60周年校慶家長會協助交通安全宣導
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Image for 1-1 subcategory */}
                  {activeTab.subCategoryId === '1-1' && (
                    <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                      <img 
                        src="/data/1-1-1.jpg" 
                        alt="成立交通安全教育推動組織" 
                        className="w-full h-auto rounded-[32px] object-cover"
                      />
                    </div>
                  )}

                  {/* Images for 2-2 subcategory */}
                  {activeTab.subCategoryId === '2-2' && (
                    <>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="clay-card p-2 bg-white border-4 border-white shadow-2xl">
                          <img 
                            src="/data/2-2-1.jpg" 
                            alt="落實交通情境設置與教學" 
                            className="w-full h-[320px] rounded-[32px] object-cover object-top"
                          />
                          <p className="text-center text-[#64748b] font-semibold text-sm mt-2 mb-1">
                            校園牆面交通標誌情境佈置
                          </p>
                        </div>
                        <div className="clay-card p-2 bg-white border-4 border-white shadow-2xl">
                          <img 
                            src="/data/2-2-2.jpg" 
                            alt="落實交通情境設置與教學" 
                            className="w-full h-auto rounded-[32px] object-cover"
                          />
                          <p className="text-center text-[#64748b] font-semibold text-sm mt-2 mb-1">
                            學務處外公布欄交通安全教育宣導和成果展示
                          </p>
                        </div>
                      </div>
                      <div className="p-8 clay-card bg-[#fffcfc] border-[#fff5f5] border-4">
                        <p className="text-[#4a4e69] text-xl font-bold leading-relaxed text-center lg:text-left">
                          配合校外教學活動，本校於行前實施車輛逃生演練，並同步完成車輛安全審核，確保車況、設備與緊急應變流程皆符合安全標準。
                        </p>
                      </div>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="clay-card p-2 bg-white border-4 border-white shadow-2xl">
                          <img 
                            src="/data/2-2-4.jpg" 
                            alt="落實交通情境設置與教學" 
                            className="w-full h-auto rounded-[32px] object-cover"
                          />
                          <p className="text-center text-[#64748b] font-semibold text-sm mt-2 mb-1">
                            遊覽車逃生演練說明
                          </p>
                        </div>
                        <div className="clay-card p-2 bg-white border-4 border-white shadow-2xl">
                          <img 
                            src="/data/2-2-5.jpg" 
                            alt="落實交通情境設置與教學" 
                            className="w-full h-auto rounded-[32px] object-cover"
                          />
                          <p className="text-center text-[#64748b] font-semibold text-sm mt-2 mb-1">
                            遊覽車逃生演練實作
                          </p>
                        </div>
                        <div className="clay-card p-2 bg-white border-4 border-white shadow-2xl">
                          <img 
                            src="/data/2-2-6.jpg" 
                            alt="落實交通情境設置與教學" 
                            className="w-full h-auto rounded-[32px] object-cover"
                          />
                          <p className="text-center text-[#64748b] font-semibold text-sm mt-2 mb-1">
                            遊覽車逃生演練說明
                          </p>
                        </div>
                      </div>
                      <div className="p-8 clay-card bg-[#fffcfc] border-[#fff5f5] border-4">
                        <p className="text-[#4a4e69] text-xl font-bold leading-relaxed text-center lg:text-left">
                          在校外活動出發前，教師會完整說明行車安全守則、上下車動線、集合回報方式與行程交通狀況，協助學生掌握風險重點並落實安全行為。
                        </p>
                      </div>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="clay-card p-2 bg-white border-4 border-white shadow-2xl">
                          <img 
                            src="/data/2-2-12.png" 
                            alt="落實交通情境設置與教學" 
                            className="w-full h-auto rounded-[32px] object-cover"
                          />
                          <p className="text-center text-[#64748b] font-semibold text-sm mt-2 mb-1">
                            校外教學行前說明會文件
                          </p>
                        </div>
                        <div className="clay-card p-2 bg-white border-4 border-white shadow-2xl">
                          <img 
                            src="/data/2-2-13.png" 
                            alt="落實交通情境設置與教學" 
                            className="w-full h-auto rounded-[32px] object-cover"
                          />
                          <p className="text-center text-[#64748b] font-semibold text-sm mt-2 mb-1">
                            校外教學行前說明注意事項
                          </p>
                        </div>
                      </div>
                    </>
                  )}

                  {/* Images for 2-3 subcategory */}
                  {activeTab.subCategoryId === '2-3' && (
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="clay-card p-2 bg-white border-4 border-white shadow-2xl">
                        <img 
                          src="/data/2-3-1.jpg" 
                          alt="舉辦各類交通安全活動" 
                          className="w-full h-[320px] rounded-[32px] object-cover object-top"
                        />
                        <p className="text-center text-[#64748b] font-semibold text-sm mt-2 mb-1">
                          兒童朝會校長交通安全宣導
                        </p>
                      </div>
                      <div className="clay-card p-2 bg-white border-4 border-white shadow-2xl">
                        <img 
                          src="/data/2-3-2.jpg" 
                          alt="舉辦各類交通安全活動" 
                          className="w-full h-[320px] rounded-[32px] object-cover object-top"
                        />
                        <p className="text-center text-[#64748b] font-semibold text-sm mt-2 mb-1">
                          兒童朝會班級交通安全宣導
                        </p>
                      </div>
                      <div className="clay-card p-2 bg-white border-4 border-white shadow-2xl">
                        <img 
                          src="/data/2-3-3.jpg" 
                          alt="舉辦各類交通安全活動" 
                          className="w-full h-[320px] rounded-[32px] object-cover object-top"
                        />
                        <p className="text-center text-[#64748b] font-semibold text-sm mt-2 mb-1">
                          兒童朝會班級交通安全宣導
                        </p>
                      </div>
                      {Array.from({ length: 22 }, (_, index) => (
                        <div key={`2-3-3-${index + 1}`} className="clay-card p-2 bg-white border-4 border-white shadow-2xl">
                          <img 
                            src={`/data/2-3-3-${index + 1}.jpg`} 
                            alt="舉辦各類交通安全活動" 
                            className="w-full h-auto rounded-[32px] object-cover"
                          />
                          <p className="text-center text-[#64748b] font-semibold text-sm mt-2 mb-1">
                            交通安全講師進行交安主題宣導
                          </p>
                        </div>
                      ))}
                      <div className="clay-card p-2 bg-white border-4 border-white shadow-2xl">
                        <img 
                          src="/data/2-3-4.jpg" 
                          alt="舉辦各類交通安全活動" 
                          className="w-full h-auto rounded-[32px] object-cover"
                        />
                        <p className="text-center text-[#64748b] font-semibold text-sm mt-2 mb-1">
                          晨間活動警察協同入班防身警報器宣導
                        </p>
                      </div>
                      <div className="clay-card p-2 bg-white border-4 border-white shadow-2xl">
                        <img 
                          src="/data/2-3-5.jpg" 
                          alt="舉辦各類交通安全活動" 
                          className="w-full h-auto rounded-[32px] object-cover"
                        />
                        <p className="text-center text-[#64748b] font-semibold text-sm mt-2 mb-1">
                          60週年校慶親師趣味競賽交通安全宣導
                        </p>
                      </div>
                      <div className="clay-card p-2 bg-white border-4 border-white shadow-2xl">
                        <img 
                          src="/data/2-3-6.jpg" 
                          alt="舉辦各類交通安全活動" 
                          className="w-full h-auto rounded-[32px] object-cover"
                        />
                        <p className="text-center text-[#64748b] font-semibold text-sm mt-2 mb-1">
                          60週年校慶親師趣味競賽交通安全宣導
                        </p>
                      </div>
                      <div className="clay-card p-2 bg-white border-4 border-white shadow-2xl">
                        <img
                          src="/data/2-3-8.jpg"
                          alt="舉辦各類交通安全活動"
                          className="w-full h-auto rounded-[32px] object-cover"
                        />
                        <p className="text-center text-[#64748b] font-semibold text-sm mt-2 mb-1">
                          60週年校慶親師趣味競賽交通安全宣導
                        </p>
                      </div>
                      <div className="clay-card p-2 bg-white border-4 border-white shadow-2xl">
                        <img
                          src="/data/2-3-9.jpg"
                          alt="舉辦各類交通安全活動"
                          className="w-full h-[320px] rounded-[32px] object-contain bg-white"
                        />
                        <p className="text-center text-[#64748b] font-semibold text-sm mt-2 mb-1">
                          60週年校慶親師趣味競賽交通安全宣導
                        </p>
                      </div>
                      <div className="clay-card p-2 bg-white border-4 border-white shadow-2xl">
                        <img
                          src="/data/2-3-10.JPG"
                          alt="舉辦各類交通安全活動"
                          className="w-full h-[320px] rounded-[32px] object-contain bg-white"
                        />
                        <p className="text-center text-[#64748b] font-semibold text-sm mt-2 mb-1">
                          校際交流后豐鐵馬道自行車體驗前車輛檢查
                        </p>
                      </div>
                      <div className="clay-card p-2 bg-white border-4 border-white shadow-2xl">
                        <img
                          src="/data/2-3-11.JPG"
                          alt="舉辦各類交通安全活動"
                          className="w-full h-[320px] rounded-[32px] object-contain bg-white"
                        />
                        <p className="text-center text-[#64748b] font-semibold text-sm mt-2 mb-1">
                          校際交流后豐鐵馬道自行車體驗
                        </p>
                      </div>
                      <div className="clay-card p-2 bg-white border-4 border-white shadow-2xl">
                        <img
                          src="/data/2-3-12.JPG"
                          alt="舉辦各類交通安全活動"
                          className="w-full h-[320px] rounded-[32px] object-contain bg-white"
                        />
                        <p className="text-center text-[#64748b] font-semibold text-sm mt-2 mb-1">
                          校際交流后豐鐵馬道自行車體驗
                        </p>
                      </div>
                      <div className="clay-card p-2 bg-white border-4 border-white shadow-2xl">
                        <img
                          src="/data/2-3-13.JPG"
                          alt="舉辦各類交通安全活動"
                          className="w-full h-[320px] rounded-[32px] object-contain bg-white"
                        />
                        <p className="text-center text-[#64748b] font-semibold text-sm mt-2 mb-1">
                          校際交流后豐鐵馬道自行車體驗
                        </p>
                      </div>
                      <div className="clay-card p-2 bg-white border-4 border-white shadow-2xl">
                        <img
                          src="/data/2-3-14.JPG"
                          alt="舉辦各類交通安全活動"
                          className="w-full h-[320px] rounded-[32px] object-contain bg-white"
                        />
                        <p className="text-center text-[#64748b] font-semibold text-sm mt-2 mb-1">
                          校際交流后豐鐵馬道自行車體驗
                        </p>
                      </div>
                      <div className="clay-card p-2 bg-white border-4 border-white shadow-2xl">
                        <img
                          src="/data/2-3-15.jpg"
                          alt="舉辦各類交通安全活動"
                          className="w-full h-[320px] rounded-[32px] object-contain bg-white"
                        />
                        <p className="text-center text-[#64748b] font-semibold text-sm mt-2 mb-1">
                          校際交流后豐鐵馬道自行車體驗檢查
                        </p>
                      </div>
                      <div className="clay-card p-2 bg-white border-4 border-white shadow-2xl">
                        <img
                          src="/data/2-3-16.jpg"
                          alt="舉辦各類交通安全活動"
                          className="w-full h-[320px] rounded-[32px] object-contain bg-white"
                        />
                        <p className="text-center text-[#64748b] font-semibold text-sm mt-2 mb-1">
                          校際交流后豐鐵馬道自行車體驗心得
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Images for 3-1 subcategory */}
                  {activeTab.subCategoryId === '3-1' && (
                    <>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                          <img 
                            src="/data/3-1-1.png" 
                            alt="學生通學資料與運用" 
                            className="w-full h-auto rounded-[32px] object-cover"
                          />
                        </div>
                        <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                          <img 
                            src="/data/3-1-2.png" 
                            alt="學生通學資料與運用" 
                            className="w-full h-auto rounded-[32px] object-cover"
                          />
                        </div>
                      </div>
                      <div className="p-8 clay-card bg-[#fffcfc] border-[#fff5f5] border-4">
                        <p className="text-[#4a4e69] text-xl font-bold leading-relaxed text-center lg:text-left">
                          學校在新生家長座談會即會對家長進行相關補習班接送位置規劃的說明，並請家長配合相關的接送。
                        </p>
                      </div>
                      <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                        <img 
                          src="/data/3-1-3.png" 
                          alt="學生通學資料與運用" 
                          className="w-full h-auto rounded-[32px] object-cover"
                        />
                      </div>
                    </>
                  )}

                  {/* Image for 3-2 subcategory */}
                  {activeTab.subCategoryId === '3-2' && (
                    <>
                      <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                        <img 
                          src="/data/3-2-1.png" 
                          alt="規劃校園進出之人車動線" 
                          className="w-full h-auto rounded-[32px] object-cover"
                        />
                      </div>
                      <div className="p-8 clay-card bg-[#fffcfc] border-[#fff5f5] border-4">
                        <div className="max-w-4xl mx-auto text-left space-y-3">
                          <h5 className="text-xl sm:text-2xl font-black text-[#4a4e69] tracking-tight">
                            停車空間管理說明
                          </h5>
                          <p className="text-[#4a4e69] text-lg sm:text-xl font-bold leading-loose">
                            考量校內停車空間有限，除保留無障礙停車格外，其餘車位由同仁依動線靠邊、依序停放，以維持校園通行順暢與安全。
                          </p>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-3 gap-8">
                        <div className="clay-card p-2 bg-white border-4 border-white shadow-2xl">
                          <img 
                            src="/data/3-2-2.jpg" 
                            alt="規劃校園進出之人車動線" 
                            className="w-full h-auto rounded-[32px] object-cover"
                          />
                          <p className="text-center text-[#64748b] font-semibold text-sm mt-2 mb-1">
                            第一停車場
                          </p>
                        </div>
                        <div className="clay-card p-2 bg-white border-4 border-white shadow-2xl">
                          <img 
                            src="/data/3-2-3.jpg" 
                            alt="規劃校園進出之人車動線" 
                            className="w-full h-auto rounded-[32px] object-cover"
                          />
                          <p className="text-center text-[#64748b] font-semibold text-sm mt-2 mb-1">
                            無障礙停車格
                          </p>
                        </div>
                        <div className="clay-card p-2 bg-white border-4 border-white shadow-2xl">
                          <img 
                            src="/data/3-2-4.jpg" 
                            alt="規劃校園進出之人車動線" 
                            className="w-full h-auto rounded-[32px] object-cover"
                          />
                          <p className="text-center text-[#64748b] font-semibold text-sm mt-2 mb-1">
                            第二停車場
                          </p>
                        </div>
                      </div>
                    </>
                  )}

                  {/* Images for 3-3 subcategory */}
                  {activeTab.subCategoryId === '3-3' && (
                    <>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                          <img 
                            src="/data/3-3-1.png" 
                            alt="交通服務及導護規劃" 
                            className="w-full h-auto rounded-[32px] object-cover"
                          />
                        </div>
                        <div className="clay-card p-2 bg-white border-4 border-white shadow-2xl">
                          <img 
                            src="/data/3-3-2.jpg" 
                            alt="交通服務及導護規劃" 
                            className="w-full h-auto rounded-[32px] object-cover"
                          />
                          <p className="text-center text-[#64748b] font-semibold text-sm mt-2 mb-1">
                            交通服務隊兒童朝會頒獎
                          </p>
                        </div>
                        <div className="clay-card p-2 bg-white border-4 border-white shadow-2xl">
                          <img 
                            src="/data/3-3-3.jpg" 
                            alt="交通服務及導護規劃" 
                            className="w-full h-auto rounded-[32px] object-cover"
                          />
                          <p className="text-center text-[#64748b] font-semibold text-sm mt-2 mb-1">
                            川堂交通服務隊執勤情形
                          </p>
                        </div>
                        <div className="clay-card p-2 bg-white border-4 border-white shadow-2xl">
                          <img 
                            src="/data/3-3-4.jpg" 
                            alt="交通服務及導護規劃" 
                            className="w-full h-auto rounded-[32px] object-cover"
                          />
                          <p className="text-center text-[#64748b] font-semibold text-sm mt-2 mb-1">
                            學校大門交通服務隊執勤情形
                          </p>
                        </div>
                        <div className="clay-card p-2 bg-white border-4 border-white shadow-2xl">
                          <img 
                            src="/data/3-3-5.jpg" 
                            alt="交通服務及導護規劃" 
                            className="w-full h-auto rounded-[32px] object-cover"
                          />
                          <p className="text-center text-[#64748b] font-semibold text-sm mt-2 mb-1">
                            川堂總導護老師和交通服務隊執勤情形
                          </p>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="clay-card bg-white p-6 border-4 border-[#e2e8f0] flex flex-col items-center text-center gap-3">
                          <div className="w-14 h-14 clay-button bg-[#fee2e2] flex items-center justify-center text-[#be123c] shadow-lg">
                            <ClipboardList size={28} />
                          </div>
                          <h4 className="text-lg font-black text-[#4a4e69]">計畫管理</h4>
                          <p className="text-sm font-bold text-[#64748b]">導護計畫、輪值與值勤紀錄，制度化落實管理。</p>
                        </div>
                        <div className="clay-card bg-white p-6 border-4 border-[#e2e8f0] flex flex-col items-center text-center gap-3">
                          <div className="w-14 h-14 clay-button bg-[#dbeafe] flex items-center justify-center text-[#1d4ed8] shadow-lg">
                            <Users2 size={28} />
                          </div>
                          <h4 className="text-lg font-black text-[#4a4e69]">人力培訓</h4>
                          <p className="text-sm font-bold text-[#64748b]">整合教職員與家長志工，持續辦理研習與增能。</p>
                        </div>
                        <div className="clay-card bg-white p-6 border-4 border-[#e2e8f0] flex flex-col items-center text-center gap-3">
                          <div className="w-14 h-14 clay-button bg-[#dcfce7] flex items-center justify-center text-[#15803d] shadow-lg">
                            <HeartHandshake size={28} />
                          </div>
                          <h4 className="text-lg font-black text-[#4a4e69]">跨域支援</h4>
                          <p className="text-sm font-bold text-[#64748b]">結合義交、志工和里長，擴大校園安全守護量能。</p>
                        </div>
                      </div>
                      <div className="p-8 clay-card bg-[#fffcfc] border-[#fff5f5] border-4">
                        <div className="space-y-4 text-left max-w-5xl">
                          <h5 className="text-2xl font-black text-[#4a4e69] tracking-tight">
                            導護人力運作與支持系統
                          </h5>
                          <p className="text-[#4a4e69] text-xl font-bold leading-relaxed text-left pl-8" style={{ textIndent: '-1.5em' }}>
                            1. 學校訂定導護工作實施計畫、輪值表及志工排班表，並落實值勤紀錄與回饋檢核，確保導護工作穩定執行。
                          </p>
                          <p className="text-[#4a4e69] text-xl font-bold leading-relaxed text-left pl-8" style={{ textIndent: '-1.5em' }}>
                            2. 參與導護工作人力包含學校教職員 128 人、家長導護志工 52 人，並安排志工參與相關研習與增能課程。
                          </p>
                          <p className="text-[#4a4e69] text-xl font-bold leading-relaxed text-left pl-8" style={{ textIndent: '-1.5em' }}>
                            3. 依據相關規定辦理感謝狀頒發、志工餐會與導護服務時數認證；並結合義交、警察與里長等外部人力共同支援。
                          </p>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="clay-card p-2 bg-white border-4 border-white shadow-2xl">
                          <img 
                            src="/data/3-3-7.jpg" 
                            alt="交通服務及導護規劃" 
                            className="w-full h-auto rounded-[32px] object-cover"
                          />
                          <p className="text-center text-[#64748b] font-semibold text-sm mt-2 mb-1">
                            導護志工校門口執勤情形
                          </p>
                        </div>
                        <div className="clay-card p-2 bg-white border-4 border-white shadow-2xl">
                          <img 
                            src="/data/3-3-8.jpg" 
                            alt="交通服務及導護規劃" 
                            className="w-full h-auto rounded-[32px] object-cover"
                          />
                          <p className="text-center text-[#64748b] font-semibold text-sm mt-2 mb-1">
                            導護志工校門口執勤情形
                          </p>
                        </div>
                        <div className="clay-card p-2 bg-white border-4 border-white shadow-2xl">
                          <img 
                            src="/data/3-3-9.jpg" 
                            alt="交通服務及導護規劃" 
                            className="w-full h-auto rounded-[32px] object-cover"
                          />
                          <p className="text-center text-[#64748b] font-semibold text-sm mt-2 mb-1">
                            導護志工校門口執勤情形
                          </p>
                        </div>
                        <div className="clay-card p-2 bg-white border-4 border-white shadow-2xl">
                          <img 
                            src="/data/3-3-10.jpg" 
                            alt="交通服務及導護規劃" 
                            className="w-full h-auto rounded-[32px] object-cover"
                          />
                          <p className="text-center text-[#64748b] font-semibold text-sm mt-2 mb-1">
                            導護志工長春吉林路口執勤情形
                          </p>
                        </div>
                        <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                          <img 
                            src="/data/3-3-11.jpg" 
                            alt="交通服務及導護規劃" 
                            className="w-full h-auto rounded-[32px] object-cover"
                          />
                          <p className="text-center text-[#64748b] font-semibold text-sm mt-2 mb-1">
                            導護志工積極參與研習學習
                          </p>
                        </div>
                        <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                          <img 
                            src="/data/3-3-12.jpg" 
                            alt="交通服務及導護規劃" 
                            className="w-full h-auto rounded-[32px] object-cover"
                          />
                          <p className="text-center text-[#64748b] font-semibold text-sm mt-2 mb-1">
                            家長會辦理志工餐會感謝導護志工辛勤付出
                          </p>
                        </div>
                        <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                          <img 
                            src="/data/3-3-13.jpg" 
                            alt="交通服務及導護規劃" 
                            className="w-full h-auto rounded-[32px] object-cover"
                          />
                          <p className="text-center text-[#64748b] font-semibold text-sm mt-2 mb-1">
                            本校導護志工榮獲金輪獎殊榮
                          </p>
                        </div>
                        <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                          <img 
                            src="/data/3-3-14.jpg" 
                            alt="交通服務及導護規劃" 
                            className="w-full h-auto rounded-[32px] object-cover"
                          />
                          <p className="text-center text-[#64748b] font-semibold text-sm mt-2 mb-1">
                            本校導護志工榮獲優良導護志工殊榮
                          </p>
                        </div>
                        <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                          <img 
                            src="/data/3-3-15.jpg" 
                            alt="交通服務及導護規劃" 
                            className="w-full h-auto rounded-[32px] object-cover"
                          />
                          <p className="text-center text-[#64748b] font-semibold text-sm mt-2 mb-1">
                            本校導護志工榮獲優良導護志工殊榮
                          </p>
                        </div>
                      </div>
                    </>
                  )}

                  {/* Images for 3-5 subcategory */}
                  {activeTab.subCategoryId === '3-5' && (
                    <>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                          <img 
                            src="/data/3-5-1.png" 
                            alt="規劃家長接送區與愛心服務站" 
                            className="w-full h-auto rounded-[32px] object-cover"
                          />
                          <p className="text-center text-[#64748b] font-semibold text-sm mt-2 mb-1">
                            校門口家長、安親班接送規劃
                          </p>
                        </div>
                        <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                          <img 
                            src="/data/3-5-2.jpg" 
                            alt="規劃家長接送區與愛心服務站" 
                            className="w-full h-auto rounded-[32px] object-cover"
                          />
                          <p className="text-center text-[#64748b] font-semibold text-sm mt-2 mb-1">
                            校門口家長接送交通告示牌
                          </p>
                        </div>
                        <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                          <img 
                            src="/data/3-5-3.jpg" 
                            alt="規劃家長接送區與愛心服務站" 
                            className="w-full h-auto rounded-[32px] object-cover"
                          />
                          <p className="text-center text-[#64748b] font-semibold text-sm mt-2 mb-1">
                            校門口家長接送區告示牌
                          </p>
                        </div>
                        <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                          <img 
                            src="/data/3-5-4.jpg" 
                            alt="規劃家長接送區與愛心服務站" 
                            className="w-full h-auto rounded-[32px] object-cover"
                          />
                          <p className="text-center text-[#64748b] font-semibold text-sm mt-2 mb-1">
                            校門口家長接送區時間規劃
                          </p>
                        </div>
                        <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                          <img 
                            src="/data/3-5-5.jpg" 
                            alt="規劃家長接送區與愛心服務站" 
                            className="w-full h-auto rounded-[32px] object-cover"
                          />
                          <p className="text-center text-[#64748b] font-semibold text-sm mt-2 mb-1">
                            校門口安親班接送區告示牌
                          </p>
                        </div>
                      </div>
                      <div className="p-8 clay-card bg-[#fffcfc] border-[#fff5f5] border-4">
                        <div className="space-y-5 text-left">
                          <h5 className="text-2xl font-black text-[#4a4e69] tracking-tight flex items-center gap-3">
                            <span className="w-9 h-9 clay-button bg-[#fee2e2] text-[#be123c] flex items-center justify-center">
                              <HeartHandshake size={18} />
                            </span>
                            愛心服務站設置與守護機制
                          </h5>
                          <p className="text-[#4a4e69] text-lg sm:text-xl font-bold leading-loose">
                            本校與周邊商家及社區據點共同簽訂並落實「愛心服務站」機制，提供學生於通學途中即時、安全且可近性的協助。現已設置 9 間愛心服務站，分布位置如地圖所示，形成校園周邊在地化安全守護網。
                          </p>
                          <div className="grid md:grid-cols-3 gap-4">
                            <div className="clay-card p-4 bg-white border-2 border-[#e2e8f0] text-center">
                              <div className="w-11 h-11 mx-auto mb-3 clay-button bg-[#dcfce7] text-[#15803d] flex items-center justify-center">
                                <HeartHandshake size={22} />
                              </div>
                              <p className="text-sm font-black text-[#4a4e69]">即時求助</p>
                              <p className="text-xs font-bold text-[#64748b] mt-1">通學途中遇到突發狀況，可立即尋求協助。</p>
                            </div>
                            <div className="clay-card p-4 bg-white border-2 border-[#e2e8f0] text-center">
                              <div className="w-11 h-11 mx-auto mb-3 clay-button bg-[#dbeafe] text-[#1d4ed8] flex items-center justify-center">
                                <PhoneCall size={22} />
                              </div>
                              <p className="text-sm font-black text-[#4a4e69]">聯繫支援</p>
                              <p className="text-xs font-bold text-[#64748b] mt-1">可協助聯繫家長、學校或相關單位。</p>
                            </div>
                            <div className="clay-card p-4 bg-white border-2 border-[#e2e8f0] text-center">
                              <div className="w-11 h-11 mx-auto mb-3 clay-button bg-[#fee2e2] text-[#be123c] flex items-center justify-center">
                                <ShieldCheck size={22} />
                              </div>
                              <p className="text-sm font-black text-[#4a4e69]">安全庇護</p>
                              <p className="text-xs font-bold text-[#64748b] mt-1">提供短暫安全停留空間，守護學生返家平安。</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                          <img 
                            src="/data/3-5-6.png" 
                            alt="規劃家長接送區與愛心服務站" 
                            className="w-full h-auto rounded-[32px] object-cover"
                          />
                          <p className="text-center text-[#64748b] font-semibold text-sm mt-2 mb-1">
                            校園周圍愛心服務站店家
                          </p>
                        </div>
                        <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                          <img 
                            src="/data/3-5-7.png" 
                            alt="規劃家長接送區與愛心服務站" 
                            className="w-full h-auto rounded-[32px] object-cover"
                          />
                          <p className="text-center text-[#64748b] font-semibold text-sm mt-2 mb-1">
                            愛心服務站約定書
                          </p>
                        </div>
                      </div>
                    </>
                  )}

                  {/* 3-4 subcategory link and image */}
                  {activeTab.subCategoryId === '3-4' && (
                    <div className="space-y-8">
                      <div className="clay-card p-8 bg-[#fffcfc] border-[#fff5f5] border-4">
                        <div className="space-y-4 text-[#4a4e69]">
                          <p className="text-lg sm:text-xl font-black leading-loose">
                            「道安總動員」可以幫助親師生快速掌握通學風險，重點如下：
                          </p>
                          <div className="space-y-3 text-base sm:text-lg font-bold leading-loose">
                            <p>👨‍👩‍👧‍👦 家長：查看學校周邊事故熱點與高風險時段，接送時可提前避開危險路口。</p>
                            <p>🧒 學生：了解常見肇事原因與事故樣態，學會正確用路與自我保護方法。</p>
                            <p>🤝 共同行動：親師生一起討論資料，調整通學路線與日常習慣，降低事故風險。</p>
                          </div>
                        </div>
                        <a
                          href="https://roadsafety.tw/SchoolHotSpots#"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 mt-5 px-6 py-3 rounded-full bg-[#ffb5a7] text-white font-black text-sm shadow-lg hover:bg-[#fb7185] transition-colors"
                        >
                          前往道安總動員（學校周邊熱點）
                        </a>
                      </div>
                      <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                        <img
                          src="/data/3-4-1.png"
                          alt="道安總動員學校周邊熱點"
                          className="w-full h-auto rounded-[32px] object-cover"
                        />
                      </div>
                    </div>
                  )}

                  {activeSubCategory?.details && (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {activeSubCategory.details.map((detail, idx) => {
                        const detailText = typeof detail === 'string' ? detail : detail.text;
                        const detailLink = typeof detail === 'object' && detail.link ? detail.link : null;
                        
                        const CardContent = (
                          <div className="clay-card bg-white p-8 border-4 border-[#f8fafc] flex flex-col items-center gap-6 transition-all duration-300 hover:translate-y-[-10px] hover:border-[#ffb5a7] text-center">
                            <div className="w-14 h-14 clay-button bg-[#ffb5a7] flex items-center justify-center text-white font-black text-xl shadow-lg">
                              {idx + 1}
                            </div>
                            <p className="font-black text-[#881337] text-base leading-snug">{detailText}</p>
                          </div>
                        );
                        
                        return detailLink ? (
                          <a key={idx} href={detailLink} target="_blank" rel="noopener noreferrer" className="block">
                            {CardContent}
                          </a>
                        ) : (
                          <div key={idx}>{CardContent}</div>
                        );
                      })}
                    </div>
                  )}

                  {/* Images for 1-1 subcategory */}
                  {activeTab.subCategoryId === '1-1' && (
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="clay-card p-2 bg-white border-4 border-white shadow-2xl">
                        <img 
                          src="/data/1-1-2.jpg" 
                          alt="交通安全教育推動組織" 
                          className="w-full h-auto rounded-[32px] object-cover"
                        />
                        <p className="text-center text-[#64748b] font-semibold text-sm mt-2 mb-1">
                          交通安全委員會議
                        </p>
                      </div>
                      <div className="clay-card p-2 bg-white border-4 border-white shadow-2xl">
                        <img 
                          src="/data/1-1-3.jpg" 
                          alt="交通安全教育推動組織" 
                          className="w-full h-auto rounded-[32px] object-cover"
                        />
                        <p className="text-center text-[#64748b] font-semibold text-sm mt-2 mb-1">
                          交通安全委員會議
                        </p>
                      </div>
                      <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl md:col-span-2">
                        <img 
                          src="/data/1-2-1.png" 
                          alt="交通安全教育推動組織" 
                          className="w-full h-auto rounded-[32px] object-cover"
                        />
                      </div>
                    </div>
                  )}

                  {/* Special Layout for Meeting Records */}
                  {activeTab.subCategoryId === '1-1' && (
                    <div className="space-y-10 pt-12">
                       <div className="flex items-center gap-5">
                          <div className="w-2 h-10 bg-[#ffb5a7] rounded-full"></div>
                          <h4 className="text-3xl font-black text-[#4a4e69] tracking-tight flex items-center gap-4">
                            會議重點雲端紀錄簿
                          </h4>
                       </div>
                       <div className="grid md:grid-cols-2 gap-8">
                          {[
                            { date: '115.01.21', text: '宣導相關交通法規，推薦福星公園和北投會館的逃生體驗，並討論學校週遭人行道斜坡的改善計畫。', icon: <Megaphone className="text-purple-400" /> },
                            { date: '114.10.31', text: '完成幼兒園大樹遷移，啟動寒假無障礙地坪與斜坡優化專案。', icon: <Trees className="text-emerald-400" /> },
                            { date: '114.01.03', text: '完成全體志工保險續約，並全面升級汰換電子哨與雨衣裝備。', icon: <Siren className="text-blue-400" /> },
                            { date: '113.11.01', text: <>1.鎖定校門口違停熱點，研討改善方式。<br/>2.上放學下雨天盡量穿著雨衣，及使用雨具的狀況。</>, icon: <Car className="text-orange-400" /> },
                            { date: '113.06.28', text: '追蹤交通局路口設施改善會勘，感謝義交與同仁長期支援。', icon: <CheckCircle2 className="text-green-400" /> }
                          ].map((m, i) => (
                            <div key={i} className="clay-card p-10 bg-white hover:bg-[#fff9f9] border-t-8 border-[#fecdd3] group">
                               <div className="flex justify-between items-start mb-6">
                                  <div className="flex items-center gap-3">
                                    <CalendarDays size={20} className="text-[#fb7185]" />
                                    <span className="font-black text-xl text-[#be123c]">{m.date}</span>
                                  </div>
                                  <div className="clay-button p-3 bg-white shadow-sm transition-transform group-hover:rotate-12">
                                    {m.icon}
                                  </div>
                               </div>
                               <p className="text-lg font-bold text-[#64748b] leading-relaxed">
                                  {m.text}
                                </p>
                            </div>
                          ))}
                       </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Playful Isometric Footer */}
        <footer className="mt-32 py-20 text-center relative z-10 border-t-8 border-dashed border-[#f1f5f9]">
          <div className="flex justify-center gap-10 mb-10">
             <div className="clay-button p-6 bg-white animate-float-slow"><Trees size={32} className="text-[#b9fbc0]" /></div>
             <div className="clay-button p-6 bg-white animate-float"><Car size={32} className="text-[#a0c4ff]" /></div>
             <div className="clay-button p-6 bg-white animate-float-slow"><Baby size={32} className="text-[#ffb5a7]" /></div>
          </div>
          <div className="space-y-4">
            <p className="text-sm font-black text-[#94a3b8] tracking-[0.5em] uppercase">Jilin Elementary School Safety Network</p>
            <h5 className="text-lg font-black text-[#4a4e69]">© 2026 臺北市中山區吉林國民小學 交通安全教育委員會</h5>
            <div className="flex items-center justify-center gap-3 pt-6">
               <div className="w-4 h-4 rounded-full bg-[#ffb5a7] shadow-lg"></div>
               <div className="w-4 h-4 rounded-full bg-[#b9fbc0] shadow-lg"></div>
               <div className="w-4 h-4 rounded-full bg-[#a0c4ff] shadow-lg"></div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;
