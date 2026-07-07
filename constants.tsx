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
    id: 'visit-data',
    title: '交通安全教育輔導訪視資料',
    icon: 'FileText',
    content: (
      <div className="space-y-4">
        <p>本頁提供交通安全教育輔導訪視資料預覽。</p>
        <div className="w-full h-[75vh] rounded-2xl overflow-hidden border-4 border-[#fee2e2] shadow-lg bg-white">
          <iframe
            src="/0-0-0.pdf#toolbar=0&navpanes=0&scrollbar=0"
            title="交通安全教育輔導訪視資料 PDF 預覽"
            className="w-full h-full"
          />
        </div>
        <p className="text-sm text-[#6b7280]">
          已隱藏預覽工具列下載按鈕；但瀏覽器端無法完全防止使用者以其他方式取得檔案。
        </p>
      </div>
    )
  },
  {
    id: 'safety-promotion',
    title: '交通安全宣導',
    icon: 'Megaphone',
    content: '本校積極推廣交通安全觀念，透過多元化宣導素材與數位媒體，強化親師生的安全意識，營造安全的校園通學環境。包含定期主題宣導、影音多媒體資源及重要法規提醒。',
    subCategories: [
      {
        id: '0-1',
        title: '交通安全宣導重點主題',
        content: '彙整交通安全重點主題，包含五大守則、五大運動與互動式學習內容。',
        details: []
      },
      {
        id: '0-2',
        title: '交通安全宣導影片',
        content: '提供交通安全教育宣導影片，協助親師生建立安全用路觀念。',
        details: []
      },
      {
        id: '0-3',
        title: '交通安全宣導資源',
        content: '整合交通安全相關網站與教材資源，提供延伸學習與教學使用。',
        details: []
      }
    ]
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
              學校規劃各年級課程計劃並融入交通安全教育主題架構課程。
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { text: '一年級：交通安全起步走', icon: <User className="w-4 h-4" /> },
                { text: '二年級：優質小乘客', icon: <Car className="w-4 h-4" /> },
                { text: '三年級：行人車輛好通行', icon: <Smile className="w-4 h-4" /> },
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
        content: '本校善用校園牆面與公共空間，系統化設置交通標誌、宣導海報與安全標語，並結合重點注意事項提醒，打造可觀察、可理解、可實踐的交通學習情境。學生可在日常生活中反覆辨識交通訊息、練習正確判斷與應對行為，逐步內化安全用路觀念，強化風險意識與自我保護能力，讓交通安全教育自然融入校園生活。',
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
            本校學生通學型態以「步行與家長接送為主、公共運輸為輔」，且上學與放學時段呈現明顯差異。
            <br/><br/>
            1. 上學時段：以走路（34%）比例最高；若合併家長機車與家長汽車接送，比例達 57%。顯示早晨時段家長接送需求高，校門周邊汽機車臨停壓力較大。
            <br/><br/>
            2. 放學時段：走路（31%）與機車接送（28%）仍為主要方式；家長汽車接送由 26% 降至 11%，補習班／課後照顧接送升至 24%，反映雙薪家庭放學接送型態轉變。
            <br/><br/>
            3. 安全重點：因機車接送在上下學皆約占三成，學校持續加強機車接送區動線管理、安全帽佩戴與過路口安全宣導。
          </>
        ),
        details: []
      },
      {
        id: '3-2',
        title: '3-2 規劃校園進出之人車動線',
        content: (
          <>
            本校採「人車分道」原則，學生統一由大門口放學，降低校內外動線交織風險。
            <br/><br/>
            1. 校內放學管理：各樓層配置交通服務隊，協助班級依序放學，控制放學節奏，避免出口壅塞。
            <br/><br/>
            2. 大門口即時管控：由總導護老師、學務主任與生教組長共同看顧，掌握放學尖峰狀況並即時調整。
            <br/><br/>
            3. 校外路口守護：導護志工與義交於周邊路口協助指揮，維護學生上下學通行安全。
          </>
        ),
        details: []
      },
      {
        id: '3-3',
        title: '3-3 交通服務及導護規劃',
        content: (
          <>
            <span className="block text-2xl font-black mb-4">交通服務隊推動與執勤說明</span>
            本校交通服務隊由各班推派學生組成，透過系統化訓練與分工執勤，協助維護校園上下學秩序與通行安全。
            <br/><br/>
            1. 訓練規劃：由學校安排交通安全知能與值勤要點訓練，建立學生正確用路觀念與服務責任。
            <br/><br/>
            2. 執勤運作：於上放學重點時段，協助校內動線引導與秩序維護，提升校園通行安全。
            <br/><br/>
            3. 成果回饋：學期末辦理公開表揚，肯定服務表現，參與學生人數約 80 人，持續擴大交通安全教育影響力。
          </>
        ),
        details: []
      },
      {
        id: '3-4',
        title: '3-4 針對學生違規、交通事故作統計',
        content: (
          <>
            <span className="block text-2xl font-black mb-4">學生違規與事故統計分析說明</span>
            本校運用「道安總動員」學校周邊熱點資料，掌握通學環境風險趨勢，作為交通安全教育與校園防制作為的依據。
            <br/><br/>
            1. 透過事故熱點與肇因分析資料，協助學生理解事故發生樣態與自我保護方式。
            <br/><br/>
            2. 針對違規行為進行個別提醒，並與家長合作追蹤改善。
            <br/><br/>
            3. 依統計結果調整宣導主題與重點時段，強化預防性重複宣導機制。
          </>
        ),
        details: []
      },
      {
        id: '3-5',
        title: '3-5 規劃家長接送區與愛心服務站',
        content: (
          <>
            <span className="block text-2xl font-black mb-4">家長接送分流與通學安全說明</span>
            本校依通學接送型態，分別規劃家長汽車、機車與安親班接送區，透過分區分流與動線管理，降低校門口尖峰時段車流交織與壅塞風險。
            <br/><br/>
            1. 分流管理：依接送車種分區停靠，減少臨停混流與人車衝突，提升校門周邊通行秩序。
            <br/><br/>
            2. 動線優化：結合上下學時段交通管制與現場引導，讓接送流程更順暢，降低等待與回堵情形。
            <br/><br/>
            3. 安全培力：搭配「步行一段路」措施，鼓勵學生於安全區域上下車後步行進出校園，培養觀察路況、遵守規則與自我保護能力，進一步提升校園周邊整體通學安全。
          </>
        ),
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