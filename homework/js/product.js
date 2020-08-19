var oBtn1=document.getElementById("btn1");
var oBtn2=document.getElementById("btn2");
var title=["Microsoft Surface Pro7 i5 8G 128G 12.3吋 白金 VDV-00011",
"【ASUS華碩】VivoBook 15 X512FL-0491G10210U 星空灰(15.6吋)筆電",
"【ACER】AN515-54 (15.6吋)電競筆電",
"【HP】15s-du1024TX (15吋)輕薄筆電-星沙金",
"【APPLE】 MacBook Air i5 128G (13吋) 金MREE2TA/A"]
var text=["<br>【主機+黑鍵盤組】<br>\
2020年，3C產品只有一種功能未免也太Low了，微軟Microsoft打造出了這款一機二用的電子產品，可應對各式生活場景。上班辦公可接上Surface Pro鍵盤，進入認真模式大顯身手；週末可將鍵盤拆下，體驗平板模式帶來的觸覺享受，逛網拍、玩手遊、看影片，一指搞定，您的電腦由您做主！\
Microsoft Surface Pro7產品介紹：<br>\
※機身700多公克重量(不含鍵盤保護蓋)，輕巧超便攜！<br>\
※支援 筆記型電腦/工作室/平板模式，針對當下需求隨時切換！<br>\
※支援Widows 10家用版，原廠打造超高相容性！<br>\
※可加購各色原廠配件(如Surface Pen、無線滑鼠、鍵盤保護蓋)\
打造個性化3C單品！",
"<br>ASUS是台灣的老牌筆電大廠，俗話說「華碩品質，堅若磐石」。近幾年來在顯示卡、手機市場口碑良好，VivoBook 15這款筆電除了繼承手機的「輕巧便攜」特點外，在效能上也不落人後。搭載了1TB+256GB的SSD固態硬碟，無論在文書報告、瀏覽網頁、剪輯設計上皆可維持迅捷效能；超窄邊框設計，有著88%的螢幕占比，15.6吋的FHD大螢幕，放入背包輕鬆隨行。最高可擴充至8GB的DDR4記憶體，多工處理不卡卡。搭載NVIDIA GeForce MX250 2GB獨立顯示卡，熱門線上遊戲輕鬆遊玩。",
"(i5-9300H 8G 512G SSD GTX1650 FHD_AN515-54-56XA)<br>\
防疫在家好無聊？組一台電競桌機還要出門超麻煩？有了這台宏碁出品的筆記型電腦，化身電競得分王，場場Carry隊友超愛！<br>\
「ACER AN515-54 15.6吋電競筆電」特色一覽：<br>\
※搭載GTX1650獨立顯卡，3A大作輕運行！<br>\
※內建高效雙風扇和Acer CoolBoost 獨家散熱技術，強化散熱效率<br>\
※採用第9代Intel Core處理器+最高32GB的DDR4記憶體<br>\
※SSD+大容量55Wh電池，掛機會戰不落漆",
"(i5-10210U/8G/1T+128G SSD/MX130-2G/Win10)<br>\
「HP」這個品牌相信大家都不陌生吧？號稱「辦公室人手一機」的長青品牌，給人的印象都是中規中矩的文書處理機。今天推薦的這台可謂是打破眾人的刻板印象，在外觀、效能上都有長足進步。<br>\
「HP 15s-du1024TX 15吋輕薄筆電-星沙金」特色一覽：<br>\
※可擴充記憶體，最高支援8G*2的雙通道RAM<br>\
※標準獨立數字鍵，文書財務皆順手，經典不敗。<br>\
※輕薄15吋大螢幕，機身重量僅1.74kg，會議攜帶無壓力<br>\
※窄邊框6.5mm，螢幕佔比81.37%，機身小於一元硬幣<br>\
※星沙金配色，扭轉古板辦公機標籤",
"蘋果公司除了長期以來的品牌形象深植人心，令人最印象深刻的莫過於獨立於「windows系統」之外的「macOS系統」，在操作與相容性上給予消費者美好的使用體驗，搭配一貫的簡約設計，擄獲不少死忠果粉的心。<br>\
「APPLE MacBook Air i5 128G (13吋) 金」特色一覽：<br>\
※1.6GHz雙核心第八代 Intel Core i5處理器<br>\
※Turbo Boost可達3.6GHz。<br>\
※8GB 2133MHz LPDDR3記憶體<br>\
※支援蘋果原生Touch ID，指紋觸控各項服務超便利(如Apple Pay)<br>\
※支援iCloud雲端硬碟，與iPhone連結個人資料同步超便利"];
var index=0;
oBtn1.onclick=function(){
    
    index--;//切換到上一張索引自減
    //判斷索引是否小於0
    if(index<0)
    {
        index=text.length-1;//目的是可以實現迴圈切換
    }
    var oTxt=document.getElementById("p_txt").innerHTML=text[index];
};
oBtn2.onclick=function(){
    //書寫事件驅動程式
    index++;//切換到下一張索引自加
    //判斷索引是否大於4
    if(index>text.length-1)
    {
        index=0;//目的是可以實現迴圈切換
    }
    var oTxt=document.getElementById("p_txt").innerHTML=text[index];
};