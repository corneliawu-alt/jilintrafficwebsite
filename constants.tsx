import React from 'react';
import { 
  Home, 
  Users, 
  BookOpen, 
  ShieldCheck, 
  Lightbulb,
  FileText,
  Calendar,
  MapPin,
  Car,
  Award,
  Megaphone,
  User,
  Bus,
  Bike,
  Smile
} from 'lucide-react';
import { Category } from './types';

export const CATEGORIES: Category[] = [
  {
    id: 'safety-promotion',
    title: '交通安全宣導',
    icon: 'Megaphone',
    content: '本校積極推廣交通安全觀念，透過多元化宣導素材與數位媒體，強化親師生的安全意識，營造安全的校園通學環境。包含定期主題宣導、影音多媒體資源及重要法規提醒。'
  },
  {
    id: 'basic-info',
    title: '基本資料與周邊環境簡介',
    icon: 'Home',
    content: '臺北市中山區吉林國民小學位於市中心心臟地帶，周邊交通網極為發達。本校致力於優化通學環境，透過詳實的數據監測與環境分析，確保每一位親師生的安全。'
  },
  {
    id: 'org-plan',
    title: '組織、計畫與宣導',
    icon: 'Users',
    subCategories: [
      {
        id: '1-1',
        title: '1-1 成立交通安全教育推動組織',
        content: '本校成立交通安全教育委員會，由校長擔任召集人，定期召開委員會議，規劃、檢討與改進交通安全教育有關事宜，確保政策落實。',
        details: [
          '定期召開交通安全委員會議',
          '滾動式修正年度執行計畫',
          '落實導護日誌紀錄與改善檢討'
        ]
      },
      {
        id: '1-2',
        title: '1-2 強化教師交通安全教育知能',
        content: '本校透過多元管道強化教師交安專業，包含定期研習、午會溝通及數位平台更新，確保教育內容與時俱進並落實於日常教學中。',
        details: [
          '辦理年度交安實體研習',
          '落實午會決議事項推廣',
          '鼓勵寒暑假自主線上研習'
        ]
      },
      {
        id: '1-3',
        title: '1-3 向家長與社區民眾宣導',
        content: '吉林國小致力於建立親師生共識，透過多元方式向家長及社區居民宣導交通安全，並建置專屬教育網站提供即時資訊，建構全方位安全網。',
        details: [
          '推動多元化家長社區宣導',
          '建置交通安全教育網站',
          '與社區警力協作宣導教育'
        ]
      }
    ]
  },
  {
    id: 'teaching',
    title: '教學與活動',
    icon: 'BookOpen',
    subCategories: [
      {
        id: '2-1',
        title: '2-1 規劃培養核心能力的教學',
        content: (
          <div className="space-y-4">
            <p>
              學校規劃各年級課程計劃並融入交通安全教育主題架構課程，經課發會審議通過。
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { text: '一年級：交通安全起步走', icon: <User className="w-4 h-4" /> },
                { text: '二年級：優質小乘客', icon: <Car className="w-4 h-4" /> },
                { text: '三年級：平安行，好心情', icon: <Smile className="w-4 h-4" /> },
                { text: '四年級：搭車小高手', icon: <Bus className="w-4 h-4" /> },
                { text: '五年級：快樂平安行', icon: <Award className="w-4 h-4" /> },
                { text: '六年級：自行車逍遙遊', icon: <Bike className="w-4 h-4" /> },
              ].map(({ text, icon }) => (
                <div
                  key={text}
                  className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-[#fee2e2] text-[#1f2937] shadow-sm"
                >
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#fb7185] text-white text-sm font-black">
                    {icon}
                  </span>
                  <span className="text-base font-bold">{text}</span>
                </div>
              ))}
            </div>
          </div>
        ),
        details: []
      },
      {
        id: '2-2',
        title: '2-2 落實交通情境設置與教學',
        content: '利用校園牆面佈置交通標誌，宣導海報、標語，注意事項提醒，進行情境教學。',
        details: []
      },
      {
        id: '2-3',
        title: '2-3 舉辦各類交通安全活動',
        content: '本校訂有交通安全教育實施計畫，依計畫組織開會，導護執勤維護學童上下學交通安全，並進行相關教育宣導活動，在多元化的教育宣導活動中，期能培養學生的交通安全知能。',
        details: []
      }
    ]
  },
  {
    id: 'guidance',
    title: '交通安全與輔導',
    icon: 'ShieldCheck',
    subCategories: [
      {
        id: '3-1',
        title: '3-1 學生通學資料與運用',
        content: (
          <>
            本校學生通勤型態呈現「步行與家長接送為主，公共運輸為輔」的狀態，且上學與放學時段的結構有顯著差異。
            <br/><br/>
            1.上學時段：高度仰賴家長接送。上學方式以走路（34%）比例最高，顯示學區內徒步通學的學生為最大宗。若將家長機車與家長汽車合併計算，接送比例高達57%，意即超過半數學生早晨由家長親自接送，所以上學尖峰時段，校門周邊的汽機車臨停流量壓力較大。
            <br/><br/>
            2.放學時段：安親班接送取代汽車接送。放學時段雖仍以走路（31%）與機車接送（28%）居前兩名，但結構發生重大變化。家長汽車接送從早上的26%大幅滑落至11%；取而代之的是課後照顧中心/補習班接送，佔比達24%，躍升為第三大方式。這反映出雙薪家庭在放學時段無法親自接送，轉而依賴安親教育機構的現況。
            <br/><br/>
            因本校機車接送在上下學皆佔約三成，學校會持續針對機車接送區動線及配戴安全帽等交通安全進行重點宣導。
          </>
        ),
        details: []
      },
      {
        id: '3-2',
        title: '3-2 規劃校園進出之人車動線',
        content: '學校人車分道，學生統一由大門口放學，會於各層樓設交通服務隊，管控放學班級的速度，大門口總導護老師會確認學校整體放學概況。學務主任和生教組長在大門口看顧學生的放學狀況，學校週遭通學環境由導護志工和義交協助指揮於各路口維護學生上下學安全。',
        details: []
      },
      {
        id: '3-3',
        title: '3-3 交通服務及導護規劃',
        content: '交通服務隊由各班推派，透過良好的訓練計畫與執行後，於學期末進行表揚，參與學生人數約80人。',
        details: []
      },
      {
        id: '3-4',
        title: '3-4 針對學生違規、交通事故作統計',
        content: '提供道安總動員線上資源網站的教學資源，讓學生學習事故發生的樣態和保護自己的方式，並藉由學生違規的個別提醒，達到讓親師生共同合作建立學生保護自己的能力。',
        details: [
          { text: '交通事故學校週邊熱點', link: 'https://roadsafety.tw/SchoolHotSpots#' },
          '違規學生個別提醒，請家長協助。',
          '預防性重複宣導機制'
        ]
      },
      {
        id: '3-5',
        title: '3-5 規劃家長接送區與愛心服務站',
        content: '學校規劃家長汽車、機車和安親班接送區，分別設置家長汽車、機車接送區，鼓勵學生步行一段路進出校園。',
        details: []
      }
    ]
  },
  {
    id: 'innovation',
    title: '創新與重大成效',
    icon: 'Lightbulb',
    content: '本校導護志工榮獲2025年金輪獎殊榮，未來將持續結合親師生的力量，共同守護學童交通安全，達成吉林吉安的目標。'
  }
];

export const getIcon = (name: string) => {
  switch (name) {
    case 'Home': return <Home className="w-5 h-5" />;
    case 'Users': return <Users className="w-5 h-5" />;
    case 'BookOpen': return <BookOpen className="w-5 h-5" />;
    case 'ShieldCheck': return <ShieldCheck className="w-5 h-5" />;
    case 'Lightbulb': return <Lightbulb className="w-5 h-5" />;
    case 'FileText': return <FileText className="w-5 h-5" />;
    case 'Calendar': return <Calendar className="w-5 h-5" />;
    case 'MapPin': return <MapPin className="w-5 h-5" />;
    case 'Car': return <Car className="w-5 h-5" />;
    case 'Award': return <Award className="w-5 h-5" />;
    case 'Megaphone': return <Megaphone className="w-5 h-5" />;
    default: return <FileText className="w-5 h-5" />;
  }
};