import React from 'react';
import Layout from '@theme/Layout';

const About: React.FC = () => {
  return (
    <Layout title="About Me" description="About me page">
      <main style={{ padding: '2rem', maxWidth: 900, margin: 'auto' }}>
        {/* Information */}
        <section>
          <h1>Information</h1>
          <ul>
            <li><strong>Name：</strong>林柏諺 (Po-Yen, Lin)</li>
            <li><strong>Education：</strong>Master's degree, Institute of Biomedical Engineering, National Yang-Ming University</li>
            <li><strong>E-mail：</strong><a href="mailto:miraculous0218@hotmail.com">miraculous0218@hotmail.com</a></li>
            <li><strong>GitHub：</strong><a href="https://github.com/ishitoralin" target="_blank" rel="noreferrer">ishitoralin</a></li>
          </ul>
        </section>

        {/* Professional Skills */}
        <section>
          <h2>Professional Skills</h2>

          <h3>System：</h3>
          <ul>
            <li>Experienced with:
              <ul>
                <li>Linux systems.</li>
                <li>Develop new projects or maintain old projects in both Windows and Linux.</li>
                <li>Docker and k8s function</li>
              </ul>
            </li>
          </ul>

          <h3>Frontend：</h3>
          <ol>
            <li>
              HTML/CSS/Javascript (ES5/ES6):
              <ul>
                <li>Proficient in writing code to replicate styles presented in Figma designs.</li>
                <li>Frameworks such as Bootstrap, Material UI and VueForm to expedite development processes.</li>
                <li>Skilled in layout and responsive web design (RWD) techniques, including grid, flexbox, position, and z-index.</li>
              </ul>
            </li>
            <li>
              Vue.js (Vue2 & Vue3)
              <ul>
                <li>Option API (Vue2)</li>
                <li>Composition API (Vue3)</li>
                <li>Data transmission methods, including props/emits, provide/inject, and defineModels syntax.</li>
                <li>Vue state management: Vuex4.0 and Pinia</li>
                <li>Vue router management</li>
              </ul>
            </li>
            <li>
              React(Next.js)
              <ul>
                <li>JSX syntax</li>
                <li>React state management: Redux</li>
                <li>Data transmission including props/callback.</li>
              </ul>
            </li>
            <li>
              Pack
              <ul>
                <li>Vue-Cli</li>
                <li>Webpack</li>
                <li>Vite</li>
              </ul>
            </li>
          </ol>

          <h3>Backend：</h3>
          <ol>
            <li>
              Node.js(Express)
              <ul>
                <li>Communicate with database (MySQL)</li>
                <li>TLS settings (https)</li>
                <li>JWT (user login)</li>
                <li>middleware</li>
                <li>Server-Sends Events (SSE)</li>
                <li>fs system</li>
              </ul>
            </li>
            <li>
              golang(gin)
              <ul>
                <li>fmt</li>
                <li>os</li>
                <li>Goroutine</li>
                <li>sync.Mutex</li>
              </ul>
            </li>
            <li>
              Docker
              <ul>
                <li>Dockerfile</li>
                <li>Docker compose</li>
                <li>Docker GUI tool design and remote api server creation</li>
              </ul>
            </li>
          </ol>
        </section>

        {/* 開發專案經驗 */}
        <section>
          <h2>開發專案經驗：</h2>
          <h3>軟體開發：</h3>
          <ol>
            <li>
              原有產品新增CIS benchmark功能
              <ul>
                <li>Vue router 建立CIS檢驗流程</li>
                <li>模組化Axios，減少一半呼叫API相關程式碼，增加可讀性</li>
                <li>Vue輸出html report</li>
                <li>使用Chart.js實現統計資料視覺化圖像化</li>
              </ul>
            </li>
            <li>
              產品新增線上更新功能(OTA)
              <ul>
                <li>使用Azure建立Web service，提供檔案比對、下載、上傳</li>
                <li>API功能分離，官方使用者使用JWT控管上傳流程，邊緣運算機台使用hash控管比對、下載功能。</li>
                <li>修改產品打包流程Control file，由dpkg檔改為加密gpg檔</li>
                <li>修改所有產品Service file ExecStart指向共同script，由script控管產品啟動、版本切換邏輯，任何產品維護時僅需針對共同script修改，減少人力耗損。</li>
                <li>使用Vue建立單頁更新頁面，使用者使用左鍵即可完成更新</li>
              </ul>
            </li>
            <li>
              Docker GUI設計開發
              <ul>
                <li>使用node.js及dockerode建立docker remote server</li>
                <li>使用vue3(Composition API)及vue cli開發docker GUI介面</li>
              </ul>
            </li>
            <li>
              AD server架設及串接
              <ul>
                <li>使用python fastapi開發AD帳號驗證功能。</li>
              </ul>
            </li>
          </ol>

          <h3>網站開發：</h3>
          <ol>
            <li>
              健身房網站
              <ul>
                <li>建立電商功能，販賣課程及產品</li>
                <li>React(Next.js)開發前端視覺及切版RWD</li>
                <li>Node.js(Express)開發後端資料處理及前端資料接收</li>
                <li>MySQL(MAMP)資料庫，進行資料儲存</li>
                <li>購物車結帳流程前後端 API 開發與串接</li>
                <li>金流串接(藍新、Linepay)</li>
              </ul>
            </li>
            <li>
              Ubike站點查詢系統
              <ul>
                <li>React(Next.js)開發前端視覺介面</li>
                <li>串接台北市政府Ubike即時站點API</li>
              </ul>
            </li>
          </ol>
        </section>

        {/* 經歷 */}
        <section>
          <h2>經歷</h2>
          <ul>
            <li>
              <strong>2024~2025</strong> 現職 新漢股份有限公司 前端工程師
              <br />
              工作內容：工業4.0解決方案，包含雲端伺服器架設、邊緣運算機器軟體開發。
            </li>
            <li>
              <strong>2023~2023</strong> 進修 資展國際前端工程師養成班
            </li>
            <li>
              <strong>2020~2022</strong> 就職 衛生福利部食品藥物管理署
              <br />
              工作內容：醫療器材(醫療電子)效能檢驗、安全性測試及軟體確效報告審核。
            </li>
            <li>
              <strong>2019~2020</strong> 留學 日本北海道札幌 JaLS
            </li>
            <li>
              <strong>2017~2019</strong> 就職 長庚光電所楊家銘老師實驗室
              <br />
              工作內容：光學感測器設計、半導體製程、封裝測試、生物試驗。
            </li>
            <li>
              <strong>2014~2016</strong> 碩士 陽明大學 生物醫學工程學系
            </li>
            <li>
              <strong>2010~2014</strong> 大學 中國醫藥大學 生物科技學系
            </li>
          </ul>
        </section>

        {/* 自傳 */}
        <section>
          <h2>自傳</h2>
          <p>
            2016年，我榮獲陽明大學醫工所的碩士學位。回顧起自己的成長，一直都是新北市的常駐居民。在高中時期，對生物學的濃厚興趣驅使我選擇就讀生物科技學系。透過大學歲月，我累積了豐富的基礎生物學實驗技能。
          </p>
          <p>
            渴望深入研究生物學相關新知識，我毅然進入陽明大學醫工所攻讀碩士學位。在這兩年中，我不僅在材料及骨科力學上有了初步的認識，更有幸在羅俊民老師的指導下深入學習了幹細胞、細胞力學等技術。我還學會了如何運用程式分析細胞行為模式，以及在Linux環境下進行細胞力學的分析，最終順利完成論文並畢業。
          </p>
          <p>
            畢業後，我於長庚大學光電所擔任研究助理，深入涉足半導體製程和光學元件開發領域。擔任小組領導者的角色，成功帶領兩位博士生及兩位碩士生撰寫新計畫，並於2019年成功通過國家3年期計畫。同時，我也帶領兩位碩士生參與國際學術研討會Eurosensors 2018，這段經歷豐富了我的國際視野。
          </p>
          <p>
            隨後，我在2019年離職，前往日本進修一年，並於2017年取得N3證照。2020年疫情影響，我回到台灣，開始在衛生福利部食品藥物管理署擔任副審查員。在這兩年半的職務中，我負責測試報告的審核，尤其對醫療電子產品的效能、安全性、軟體進行嚴謹的審查，並核發相應的許可證。這段經驗讓我深刻認識到醫療設備日益走向AI化的趨勢。
          </p>
          <p>
            觀察到科技的迅速進步，我決定跳脫傳統醫材相關領域，轉而追求可以接觸AI技術的職業，並以前端工程師作為踏出的第一步。於資展國際的前端網頁開發班進修，我與團隊成功以React、Node.js及MySQL等技術合作開發出一個複合式健身房電商網站。結業後於新漢股份有限公司軟體開發部門擔任前端工程師一職，並開始著手邊緣運算機台的產品開發。訓練期過後開始單獨或與他人合作開發專案，內容包含使用Vue進行軟體GUI開發，使用Azure及Node.js開發雲端伺服器，並開始接觸golang及docker進行後端伺服器開發，讓自己的技術漸漸地往全端工程師邁進。
          </p>
          <p>
            經歷如此多元的領域，我相信我的多方面技能和豐富經驗將成為未來挑戰的寶貴資產。
          </p>
        </section>
      </main>
    </Layout>
  );
};

export default About;
