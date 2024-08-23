import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function TrendingNow() {

    const settings = {
        dots: false,
        infinite: true,
        speed: 2500,
        slidesToShow: 4,
        slidesToScroll: 4
    };

    return (
        <div className='trend'>
            <h3>Trending Now</h3>
            <span>
                <select name="" id="">
                    <option selected>India</option>
                    <option >Global</option>
                </select>
                <select name="" id="">
                    <option selected>Movies</option>
                    <option>TV Shows</option>
                </select>
            </span>
            <div className=''>
                <div className="mt-20 slides">
                    <Slider {...settings}>
                        {
                            data.map((d) => (
                                <div className=''>
                                    <div className='img-section'>
                                        <img src={d.img} alt="" />
                                        <h2>{d.text}</h2>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </div>
    )
}

const data = [
    {
        img: 'https://occ-0-2483-2186.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABQ4EfF5TRIjDfgG6Sc7odd8NNTKTnT57H7YBwbifMzAXZ1Hi9cZ9q5cotsGaroP9ZUXGob25WzGK-eASX6lF-Il2rdxYdaUEE6R-WkzcZpqibGHBHpGEVppU7jArhfoRfeX3PoWKawcFAa08dYD8TgJ5I18K7VPnuaMSEEbHxROehYIRkTVueq1NQOse7tKGTtwMJuw403CQ_7ioiC1uXuh7utNSZh2OaBYTCG7jePf4Jvq0cLxFcqi46pv_rXuVLbyYwqLNonsiG008oo_SsxTf6--gDOQ7whC1mfL02igltDtUA7KZ5FYUJq3NBewyZ39ldtdNuk5xNQJR62XBLNb0rSPjiKl7v3GX9L0RpmT62y_z934.webp?r=ead',
        text: 1
    },
    {
        img: 'https://occ-0-2483-2186.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABaKxz6AlzerittssXQzQOoY28XDWMzKItpTFYmRr7zwdETFNdjJTq07cnHuyq2wXlJXuYF4-831EoXv7_ljk37eB-KwX45gmItk7ggPR3CN3TqK9KrSMciiX_9MvepvycSxIP-wCIsy-wSpYii9axp28pISNWD-Mbfku11dLpfuq7cP9egyG_zYHe7dc0OLfjLLTVxwy74B3h13On0PMmMIbxULMvO5-XXDpt1h_eXEWjFgY32-Rkes0Qjm0AB7KdAZJOAUCIkM4BUyrGX5e2rnmCY6sPSMwu0jcPHW5-I28f559iLfKrRh6j6TZhbRFFYV0u6VmaUWXVjoPRUrPPIo.webp?r=8c7',
        text: 2
    },
    {
        img: 'https://occ-0-2483-2186.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABVnVseCf50-R1462JDaQKvq54J2uOHs-Y936s_nzZTaDMHFsu1gkCuoTmpuVY7sNvUqLdVo709K1CHK9xd4SjwZdZBgodUJ1P5EV1Pze2GjtqjGYvZm2-1e4WXaAXePoSZ4oLPNiXnUx2hx2Wcs9hZ8_9mriWzOQyEE.webp?r=a57',
        text: 3
    },
    {
        img: 'https://occ-0-2483-2186.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABcQ_RIANW1pDsx4qCgrzMXj-9SaK1vYosd-83d0XxTVWqqA2rOpu-MBVbVbY1ih-rR9ABG8Mu4pFDzvK6hlt39-6L59frWSIieGvoj_LR-TXxKwATR2rt8jttn-skm4bKTZ1k66l5KKiHtH8hshug-jjBax87LrywEFnHLc33L0snUMPOLWfaHrWmFj1OMMdmhBWcsDwjuKwU-_jyHhqktx11RtqRe3mEOrNg2NPeDwWeBuhGIGYHJZVgB-zxMzW-OHNifrxTFwqIND-j_v9yZnNYI18TTqOIBrs3yOzccVgGhTDty-kaTynAyC99xueWBCczQQ9u5QLJz8p0HqZ9fs.webp?r=3de',
        text: 4
    },
    {
        img: 'https://occ-0-2483-2186.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABa7a3AAQLd_WpeSg55jY4BA-i8TkPjRxsu8rRU6A9NERZjksylBBDih5D9yIKIihvoE2U-ttmcFa2Jw7EdwjfP3ivxlYNb0xqPaIxC9VbCxh9MsQkaKo3YlTZ05_oF31J4CTd-LostYJ79L-nHnmJZVlFWFG4VsXNnnRNd-JyxVzOClndpbegGnDGzP85bNSSf8om0DSi-8x7QfmS7cscfg2-VBlqWaQJH8f6u5D2yffjTWx3OlU_VECuFLE4go63_-ZvpgomGdthh9YUbxTCRxpOC3y5yEJzW0gukK9JhsB3LVf-d2hJMcIwr7TaWC4q9QE_QXj_ur23pi0q8tuS2LruAHnlYekO4-X63i_czHPsOl8AGo.webp?r=787',
        text: 5
    },
    {
        img: 'https://occ-0-2483-2186.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABcKDZcX_vxop6PC5ZoY_Q3VGfzkGEL01LodrZcC9l6OejfEzYgSrxCoE2lHxCHqnMbmkUbt4p8LM67j1jX2U5Iv2TGDHQE2pyKB5Co6I-sSoSPh8mvoEXnyOIHkOC30IFcQXyTtA02joullMPrtFL8Vs6eDlkCz8g_opTF6C_h4BdyR4gY7mb96s3a_T2paW9xJ1z7ggUI65ROiDAM9m8MXhAnz95VRP63nihWB4gIb-qVKXDVJzygVyeSGH-XxpfvUTnWkXXmc2AGQc_xcFDV1cj25Q.webp?r=508',
        text: 6
    },
    {
        img: 'https://occ-0-2483-2186.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABau0ZI6s_c3G6PbaI79N_VIc-C9xP6EbTjdU6Qa2zkfGI_sc2VqPiiqZY71jkCtyQVCfVbIYCnBgl2JD2DxnCh7laqYm2b9p9vx2b-RKbK03mKX1eDkUJBTaaToqWNhK-rXEl7Nuu_Hc3vMw3GoDyYFnMLtJ632-2Q7ZEy7SlPfspY5M68sHwIk4friDrnA.webp?r=a0a',
        text: 7
    },
    {
        img: 'https://occ-0-2483-2186.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABZ2S1-LzjaFcY6WM_4WJ22cBjq8GUQmhXU4Gy_GvxGqhOyL6th9sOCdGTVEXc_b5aQr7BS2kSpfn_VU5vnQrRDYL96COwggcJWJ_ey0Hv75vVm7vJKszfPxGyhBfGkTtaXlf_EV5X5KXs5znpbd4JjZwIeP5If956xE-VHWIGud1YccbcbRfJ9SbFuwJIFo6jaekrk1fpVhXqpqGp1T3YybGvA4LNmQfOkbjOBl90G4arbIIT8tWCs2ceuwJTp3q6_9aXSNpI0dQiVpWXX-BRESA76hp.webp?r=26c',
        text: 8
    },
    {
        img: 'https://occ-0-2483-2186.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABarv2U9aeW1KMFHxBB87tHoj0Pd3RNQ8qVX8ONOKkGUjlhUerbFb02nqs-iivJPx6Qra9RulN3CwxYE8Qs4anU46TF3edbAUUqERdH66-3zSOLO5Hk3kkKuQjui3vn2a_dhLXswgbjPmAeduSsepk0r2C66p3to3PHYLziyNfVqbBRk4FjQH26Ws7o7N263BK7aYexhZLr5IYSNFuGFKX7O3hSznX0cCxzCrwXAvsSxcTng0CFbA267e95k3Dm_cJ_aXIzYliVXTr9TTFPAnNQGJ5Zzj.webp?r=be5',
        text: 9
    },
    {
        img: 'https://occ-0-2483-2186.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABV2j-enrLYchHDPFFhK5c1AMYxzGvg-HShtb9Yhp1u2eGBhm3ompZQjo5TvwLeP82e924CSCMle6JbdyNZfyG_xAcDWrbJThqpQLEySqw5Fa-ElRUzI7kOQ1eJq-xfcnA-BC6RaOpNhzVXk9-Ksu43RQngGos9LcXOv9H1zdpMb0bC4RgnH-izg_YuKO8gdc7-KugC7HBAwVn44lJckWKhookOGIaRWU3kpAiL5Ag5ZgDDrAarVtOI95tTo8b8mOSm3bQ_hP1onu4uNmhtDrFl9-FpbzC1xC4cblYUjao7unjWCnUq4Ghb6i.webp?r=5da',
        text: 10
    },
]

export default TrendingNow
