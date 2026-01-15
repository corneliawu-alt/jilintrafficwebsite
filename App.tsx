
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

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>({ categoryId: CATEGORIES[0].id });
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const mainContentRef = useRef<HTMLElement>(null);

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
    if (window.innerWidth < 1024) {
      setIsSidebarOpen(false);
    }
  };

  // 當頁籤切換時，確保新頁面滾動到頂部
  useEffect(() => {
    // 滾動到頂部的函數
    const scrollToTop = () => {
      if (mainContentRef.current) {
        mainContentRef.current.scrollTop = 0;
      }
    };
    
    // 立即執行一次
    scrollToTop();
    
    // 使用 setTimeout 確保在 React 完成渲染後執行
    const timeoutId = setTimeout(() => {
      scrollToTop();
      // 再延遲一次確保內容完全渲染
      setTimeout(scrollToTop, 50);
    }, 0);
    
    return () => {
      clearTimeout(timeoutId);
    };
  }, [activeTab.categoryId, activeTab.subCategoryId]);

  const transportData = [
    { name: '走路', 上學: 34, 放學: 31 },
    { name: '家長汽車', 上學: 26, 放學: 11 },
    { name: '家長機車', 上學: 31, 放學: 28 },
    { name: '公車', 上學: 4, 放學: 2 },
    { name: '捷運', 上學: 2, 放學: 2 },
    { name: '補習班接送', 上學: 0, 放學: 24 },
    { name: '其他', 上學: 2, 放學: 1 },
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

      {/* Sidebar - Toy-like Dashboard Menu */}
      <aside className={`
        fixed lg:fixed z-40 w-80 h-screen lg:h-screen transition-all duration-700 cubic-bezier(0.19, 1, 0.22, 1) p-6
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="clay-card h-full flex flex-col bg-white overflow-hidden">
          <div className="p-6 bg-gradient-to-br from-[#ffc8c0] to-[#fcd5ce] flex flex-col items-center gap-3 relative">
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
          
          <div className="py-1 px-6 bg-[#f8fafc] text-center border-t-4 border-dashed border-[#f1f5f9]">
            <div className="flex items-center justify-center">
              <img src="/data/LOGO.png" alt="LOGO" className="h-[140px] w-auto object-contain max-w-full" />
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main ref={mainContentRef} className="flex-1 overflow-y-auto p-6 lg:p-12 lg:ml-80 relative z-10 custom-scrollbar">
        {!isSidebarOpen && (
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="fixed top-8 left-8 z-50 clay-button p-5 bg-[#ffb5a7] text-white lg:hidden shadow-2xl"
          >
            <Menu size={28} />
          </button>
        )}

        {/* Dynamic Header Section */}
        <header className="mb-12 animate-in fade-in slide-in-from-top duration-1000">
          <div className="clay-card p-10 bg-white/90 backdrop-blur-xl flex flex-col lg:flex-row justify-between items-center gap-8 border-b-8 border-[#f8fafc]">
            <div className="flex items-center gap-8">
              <div className="clay-button w-16 h-16 rounded-full p-2 bg-[#b9fbc0] rotate-3 hover:rotate-0 transition-transform shadow-lg flex items-center justify-center overflow-hidden">
                <img 
                  src="/data/0-0-1.png" 
                  alt="交通安全" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h2 className="text-4xl font-black text-[#4a4e69] tracking-tighter leading-tight">
                  吉林吉安，守護交安，心安平安
                </h2>
                <div className="flex items-center gap-4 mt-3">
                  <div className="flex items-center gap-1.5 px-4 py-1.5 bg-[#ffecd2] text-[#d48c2c] rounded-full text-[11px] font-black uppercase shadow-sm">
                    <Star size={12} className="fill-current" /> Safe Zone
                  </div>
                  <p className="text-[#94a3b8] text-sm font-bold italic border-l-2 border-[#e2e8f0] pl-4">臺北市吉林國小 交通安全數位平台</p>
                </div>
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
                    <h3 className="text-4xl lg:text-6xl font-black text-white leading-[1.05] mb-4 drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)] tracking-tighter">
                      交通安全教育宣導
                    </h3>
                    <p className="text-white/80 text-lg lg:text-xl font-bold leading-relaxed mb-0 max-w-xl">
                      走出吉林，探索世界，確實瞭解交通安全教育宣導、交通安全教育教材、宣導影片，建立每一個人的交通安全觀念。
                    </p>
                  </div>
                </section>

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

                {/* YouTube 影片區塊 */}
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
                  </div>
                </section>

                {/* 交通安全五大運動 */}
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
                </section>

                <div className="grid md:grid-cols-3 gap-10">
                  {[
                    { icon: <Youtube size={48} />, title: '臺北市交通安全宣導', color: '#ffadad', desc: '宣導影片報你知', link: 'https://sts.tp.edu.tw/Resource/datalist/3' },
                    { icon: <ImageIcon size={48} />, title: '臺北市政府交通局', color: '#ffd6a5', desc: '臺北交通安心行', link: 'https://dot.gov.taipei/pedestriansafety/' },
                    { icon: <ScrollText size={48} />, title: '靖娟兒童安全文教基金會', color: '#fdffb6', desc: '交通安全教材包', link: 'https://www.safe.org.tw/news-detail/135__1/' }
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
                  <div className="p-12 clay-card bg-[#fffcfc] border-[#fff5f5] border-4 relative">
                    <div className="absolute -top-4 -left-4 clay-button bg-[#be123c] text-white p-3 shadow-lg">
                      <ScrollText size={20} />
                    </div>
                    <p className="text-[#4a4e69] text-2xl font-bold leading-relaxed text-center lg:text-left">
                      {activeSubCategory ? activeSubCategory.content : activeCategory?.content}
                    </p>
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
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                        <img 
                          src="/data/2-1-1.jpg" 
                          alt="規劃培養核心能力的教學" 
                          className="w-full h-auto rounded-[32px] object-cover"
                        />
                      </div>
                      <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                        <img 
                          src="/data/2-1-4.jpg" 
                          alt="規劃培養核心能力的教學" 
                          className="w-full h-auto rounded-[32px] object-cover"
                        />
                      </div>
                      <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                        <img 
                          src="/data/2-1-3.png" 
                          alt="規劃培養核心能力的教學" 
                          className="w-full h-auto rounded-[32px] object-cover"
                        />
                      </div>
                      <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                        <img 
                          src="/data/2-1-2.png" 
                          alt="規劃培養核心能力的教學" 
                          className="w-full h-auto rounded-[32px] object-cover"
                        />
                      </div>
                      <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                        <img 
                          src="/data/2-1-5.jpg" 
                          alt="規劃培養核心能力的教學" 
                          className="w-full h-auto rounded-[32px] object-cover"
                        />
                      </div>
                      <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                        <img 
                          src="/data/2-1-6.png" 
                          alt="規劃培養核心能力的教學" 
                          className="w-full h-auto rounded-[32px] object-cover"
                        />
                      </div>
                      <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                        <img 
                          src="/data/2-1-7.png" 
                          alt="規劃培養核心能力的教學" 
                          className="w-full h-auto rounded-[32px] object-cover"
                        />
                      </div>
                      <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                        <img 
                          src="/data/2-1-8.jpg" 
                          alt="規劃培養核心能力的教學" 
                          className="w-full h-auto rounded-[32px] object-cover"
                        />
                      </div>
                      <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                        <img 
                          src="/data/2-1-9.png" 
                          alt="規劃培養核心能力的教學" 
                          className="w-full h-auto rounded-[32px] object-cover"
                        />
                      </div>
                      <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                        <img 
                          src="/data/2-1-11.jpg" 
                          alt="規劃培養核心能力的教學" 
                          className="w-full h-auto rounded-[32px] object-cover"
                        />
                      </div>
                      <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                        <img 
                          src="/data/2-1-10.jpg" 
                          alt="規劃培養核心能力的教學" 
                          className="w-full h-auto rounded-[32px] object-cover"
                        />
                      </div>
                      <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                        <img 
                          src="/data/2-1-12.jpg" 
                          alt="規劃培養核心能力的教學" 
                          className="w-full h-auto rounded-[32px] object-cover"
                        />
                      </div>
                    </div>
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
                          <Users2 size={32} />
                        </div>
                        <p className="font-black text-[#881337] text-sm leading-snug">
                          3.<br />學校和警政單位合作入班宣導
                        </p>
                      </div>
                      <div className="clay-card bg-white p-6 border-4 border-[#f8fafc] flex flex-col items-center gap-4 text-center transition-all duration-300 hover:translate-y-[-5px] hover:border-[#ffb5a7]">
                        <div className="w-16 h-16 clay-button bg-[#ffb5a7] flex items-center justify-center text-white shadow-lg">
                          <Bike size={32} />
                        </div>
                        <p className="font-black text-[#881337] text-sm leading-snug">
                          4.<br />體表會趣味競賽結合腳踏車安全騎乘教育
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
                      <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                        <img 
                          src="/data/1-2-2.jpg" 
                          alt="強化教師交通安全教育知能" 
                          className="w-full h-auto rounded-[32px] object-cover"
                        />
                      </div>
                      <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                        <img 
                          src="/data/1-2-3.jpg" 
                          alt="強化教師交通安全教育知能" 
                          className="w-full h-auto rounded-[32px] object-cover"
                        />
                      </div>
                      <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                        <img 
                          src="/data/1-2-4.jpg" 
                          alt="強化教師交通安全教育知能" 
                          className="w-full h-auto rounded-[32px] object-cover"
                        />
                      </div>
                      <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                        <img 
                          src="/data/1-2-5.jpg" 
                          alt="強化教師交通安全教育知能" 
                          className="w-full h-auto rounded-[32px] object-cover"
                        />
                      </div>
                      <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                        <img 
                          src="/data/1-2-6.jpg" 
                          alt="強化教師交通安全教育知能" 
                          className="w-full h-auto rounded-[32px] object-cover"
                        />
                      </div>
                      <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                        <img 
                          src="/data/1-2-7.jpg" 
                          alt="強化教師交通安全教育知能" 
                          className="w-full h-auto rounded-[32px] object-cover"
                        />
                      </div>
                      <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                        <img 
                          src="/data/1-2-8.jpg" 
                          alt="強化教師交通安全教育知能" 
                          className="w-full h-auto rounded-[32px] object-cover"
                        />
                      </div>
                    </div>
                  )}

                  {/* Images for 1-3 subcategory */}
                  {activeTab.subCategoryId === '1-3' && (
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                        <img 
                          src="/data/1-3-1.jpg" 
                          alt="向家長與社區民眾宣導" 
                          className="w-full h-auto rounded-[32px] object-cover"
                        />
                      </div>
                      <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                        <img 
                          src="/data/1-3-2.jpg" 
                          alt="向家長與社區民眾宣導" 
                          className="w-full h-auto rounded-[32px] object-cover"
                        />
                      </div>
                      <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                        <img 
                          src="/data/1-3-3.jpg" 
                          alt="向家長與社區民眾宣導" 
                          className="w-full h-auto rounded-[32px] object-cover"
                        />
                      </div>
                      <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                        <img 
                          src="/data/1-3-4.jpg" 
                          alt="向家長與社區民眾宣導" 
                          className="w-full h-auto rounded-[32px] object-cover"
                        />
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
                        <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                          <img 
                            src="/data/2-2-1.jpg" 
                            alt="落實交通情境設置與教學" 
                            className="w-full h-auto rounded-[32px] object-cover"
                          />
                        </div>
                        <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                          <img 
                            src="/data/2-2-2.jpg" 
                            alt="落實交通情境設置與教學" 
                            className="w-full h-auto rounded-[32px] object-cover"
                          />
                        </div>
                      </div>
                      <div className="p-8 clay-card bg-[#fffcfc] border-[#fff5f5] border-4">
                        <p className="text-[#4a4e69] text-xl font-bold leading-relaxed text-center lg:text-left">
                          配合校外教學活動進行逃生演練活動，並確實進行車輛安全審核。
                        </p>
                      </div>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                          <img 
                            src="/data/2-2-4.jpg" 
                            alt="落實交通情境設置與教學" 
                            className="w-full h-auto rounded-[32px] object-cover"
                          />
                        </div>
                        <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                          <img 
                            src="/data/2-2-5.jpg" 
                            alt="落實交通情境設置與教學" 
                            className="w-full h-auto rounded-[32px] object-cover"
                          />
                        </div>
                        <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                          <img 
                            src="/data/2-2-6.jpg" 
                            alt="落實交通情境設置與教學" 
                            className="w-full h-auto rounded-[32px] object-cover"
                          />
                        </div>
                      </div>
                      <div className="p-8 clay-card bg-[#fffcfc] border-[#fff5f5] border-4">
                        <p className="text-[#4a4e69] text-xl font-bold leading-relaxed text-center lg:text-left">
                          在校外活動前確實跟學生說明相關注意事項，包含行車安全及行程交通狀況。
                        </p>
                      </div>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                          <img 
                            src="/data/2-2-12.png" 
                            alt="落實交通情境設置與教學" 
                            className="w-full h-auto rounded-[32px] object-cover"
                          />
                        </div>
                        <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                          <img 
                            src="/data/2-2-13.png" 
                            alt="落實交通情境設置與教學" 
                            className="w-full h-auto rounded-[32px] object-cover"
                          />
                        </div>
                      </div>
                    </>
                  )}

                  {/* Images for 2-3 subcategory */}
                  {activeTab.subCategoryId === '2-3' && (
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                        <img 
                          src="/data/2-3-1.jpg" 
                          alt="舉辦各類交通安全活動" 
                          className="w-full h-auto rounded-[32px] object-cover"
                        />
                      </div>
                      <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                        <img 
                          src="/data/2-3-2.jpg" 
                          alt="舉辦各類交通安全活動" 
                          className="w-full h-auto rounded-[32px] object-cover"
                        />
                      </div>
                      <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                        <img 
                          src="/data/2-3-3.jpg" 
                          alt="舉辦各類交通安全活動" 
                          className="w-full h-auto rounded-[32px] object-cover"
                        />
                      </div>
                      <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                        <img 
                          src="/data/2-3-4.jpg" 
                          alt="舉辦各類交通安全活動" 
                          className="w-full h-auto rounded-[32px] object-cover"
                        />
                      </div>
                      <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                        <img 
                          src="/data/2-3-5.jpg" 
                          alt="舉辦各類交通安全活動" 
                          className="w-full h-auto rounded-[32px] object-cover"
                        />
                      </div>
                      <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                        <img 
                          src="/data/2-3-6.jpg" 
                          alt="舉辦各類交通安全活動" 
                          className="w-full h-auto rounded-[32px] object-cover"
                        />
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
                        <p className="text-[#4a4e69] text-xl font-bold leading-relaxed text-center lg:text-left">
                          因校內停車空間不足，除專設無障礙停車格外，其餘空間由同仁自行靠邊依序停放。
                        </p>
                      </div>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                          <img 
                            src="/data/3-2-2.jpg" 
                            alt="規劃校園進出之人車動線" 
                            className="w-full h-auto rounded-[32px] object-cover"
                          />
                        </div>
                        <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                          <img 
                            src="/data/3-2-3.jpg" 
                            alt="規劃校園進出之人車動線" 
                            className="w-full h-auto rounded-[32px] object-cover"
                          />
                        </div>
                        <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl md:col-span-2">
                          <img 
                            src="/data/3-2-4.jpg" 
                            alt="規劃校園進出之人車動線" 
                            className="w-full h-auto rounded-[32px] object-cover"
                          />
                        </div>
                      </div>
                    </>
                  )}

                  {/* Embedded webpage for 3-4 subcategory */}
                  {activeTab.subCategoryId === '3-4' && (
                    <div className="clay-card p-2 bg-white border-4 border-white shadow-2xl">
                      <div className="w-full" style={{ height: '800px' }}>
                        <iframe
                          src="https://roadsafety.tw/"
                          className="w-full h-full rounded-[32px] border-0"
                          title="交通安全網站"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
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
                      <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                        <img 
                          src="/data/1-1-2.jpg" 
                          alt="交通安全教育推動組織" 
                          className="w-full h-auto rounded-[32px] object-cover"
                        />
                      </div>
                      <div className="clay-card p-2 bg-white overflow-hidden border-4 border-white shadow-2xl">
                        <img 
                          src="/data/1-1-3.jpg" 
                          alt="交通安全教育推動組織" 
                          className="w-full h-auto rounded-[32px] object-cover"
                        />
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
