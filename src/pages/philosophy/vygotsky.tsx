import PhilosophyLayout from "../../layouts/PhilosophyLayout";

export default function Vygotsky() {
  return (
    <PhilosophyLayout
      meta={{
        title: "維高斯基最近發展區理論 — 「陪住佢」嘅藝術",
        desc: "維高斯基最近發展區（ZPD）同鷹架理論。香港家長點樣喺唔同年齡幫小朋友「搭棚架」——唔係幫佢做，而係陪佢做到。",
        slug: "vygotsky",
      }}
    >
      <h1>🤝 維高斯基最近發展區理論</h1>
      <p className="lead">
        維高斯基（Lev Vygotsky）係俄羅斯心理學家，佢嘅理論喺近代教育界影響力最大。
        佢最出名嘅概念係<strong>「最近發展區」</strong>（Zone of Proximal Development, ZPD）
        同<strong>「鷹架理論」</strong>（Scaffolding）——簡單講就係：幫佢多少少，佢就做到。
      </p>

      <h2>咩係最近發展區？</h2>
      <p>
        維高斯基將小朋友嘅能力分為三個圈圈：
      </p>
      <ul>
        <li><strong>內圈（已經做到）</strong>：自己搞掂，唔使幫</li>
        <li><strong>中圈（最近發展區）</strong>：有人幫就做到，自己做就做唔到</li>
        <li><strong>外圈（暫時做唔到）</strong>：點幫都做唔到，未準備好</li>
      </ul>
      <p>
        教育嘅目標，就係喺<strong>中圈</strong>入面活動——太易會悶，太難會放棄。
        香港教育成日錯嘅地方係直接跳去外圈，搞到小朋友好大壓力。
      </p>

      <h2>鷹架理論：點樣幫先啱？</h2>
      <p>
        「鷹架」即係建築棚架——起樓時要棚架，起好就拆走。維高斯基話，
        家長同老師應該提供<strong>臨時嘅支援</strong>，等小朋友做到佢自己一個做唔到嘅嘢，
        然後慢慢撤走支援。
      </p>

      <h3>有效鷹架嘅方法</h3>
      <ul>
        <li><strong>示範</strong>：你做一次俾佢睇，然後等佢試</li>
        <li><strong>提問</strong>：唔係俾答案，而係問「跟住你覺得應該點做？」</li>
        <li><strong>拆細</strong>：將大任務拆成細步驟，一步一步嚟</li>
        <li><strong>提示</strong>：俾少少提示，唔係直接出手</li>
      </ul>

      <h3>錯誤鷹架（香港家長最常見）</h3>
      <ul>
        <li><strong>直接幫佢做</strong>：同佢做功課、幫佢著鞋——呢個唔係鷹架，係剝削學習機會</li>
        <li><strong>做埋俾佢睇就算</strong>：示範完但唔俾佢試——口訣係「我哋一齊做」</li>
        <li><strong>過早撤走支援</strong>：話「你自己嚟啦」但佢仲未準備好</li>
      </ul>

      <h2>維高斯基嘅另一個重點：語言係思考嘅工具</h2>
      <p>
        維高斯基認為，小朋友透過<strong>同人對話</strong>學習思考。
        佢發現小朋友做嘢時會自己同自己講嘢（私語），呢個係思考嘅載具。
      </p>
      <ul>
        <li><strong>唔好叫佢收聲</strong>：小朋友一邊砌積木一邊自己講嘢，係正常嘅思考過程</li>
        <li><strong>多啲對話</strong>：唔係指令（「執嘢」），而係開放式問題（「你覺得啲積木可以點樣收？」）</li>
        <li><strong>同儕學習</strong>：維高斯基話同齡小朋友互相教，效果有時好過大人教</li>
      </ul>

      <h2>香港家長實戰應用</h2>

      <h3>👶 2–4 歲：學著鞋</h3>
      <ul>
        <li><strong>示範</strong>：你慢慢著一次俾佢睇，同時講解步驟</li>
        <li><strong>一齊做</strong>：你攞住鞋，佢伸隻腳入去</li>
        <li><strong>提示</strong>：佢自己試時你只係出手指指「呢個魔術貼要貼返實喎」</li>
        <li><strong>放手</strong>：佢搞得掂時，你只需要坐喺隔籬</li>
      </ul>

      <h3>🧒 4–6 歲：學寫自己個名</h3>
      <ul>
        <li><strong>拆細</strong>：先學第一個字，唔好一次過寫晒全名</li>
        <li><strong>提示</strong>：用虛線字帖，等佢跟住寫</li>
        <li><strong>工具</strong>：用沙盤或者白板筆，易擦易改，減少挫折感</li>
      </ul>

      <h3>🧑 6–10 歲：學做時間管理</h3>
      <ul>
        <li><strong>示範</strong>：你一齊同佢規劃今日嘅時間表</li>
        <li><strong>提示</strong>：用計時器視覺化時間</li>
        <li><strong>放手</strong>：等佢自己規劃，你只係 check 最後有冇做到</li>
      </ul>

      <div className="mt-10 rounded-2xl bg-gradient-to-br from-sky/10 to-grape/10 p-6">
        <p className="font-display text-lg font-bold text-[#3f3550]">📌 一句總結</p>
        <p className="mt-2 leading-relaxed text-[#5a4d68]">
          維高斯基教識我哋：<strong>最好嘅教學唔係幫佢做，而係喺佢差少少就做到嘅時候扶一把。</strong>
          然後慢慢放手，等佢話「我得咗啦！」
        </p>
      </div>
    </PhilosophyLayout>
  );
}
