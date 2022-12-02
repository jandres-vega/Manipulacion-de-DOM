import {getDataDb} from '../util/getData'
import Categories from "../templates/Categories";
import {URL}from '../util/urls'

const Home = async () => {
    const dataImg = await getDataDb(URL.promociones);
    return `
        <section class="container-pro">
            ${
        dataImg.map((data) => `
                    <div class="item${data.id}">
                        <img class="tm" src="${data.image}" alt="img1">
                    </div>
                `).join('')
    }
        </section>
        <section class="container-products">
            ${
        await Categories()
    }
            <div class="products">
                <div class="container-fp">
                    <div class="info-p">
                        <h2>Top Save Today</h2>
                        <p>Done not miss this opportunity at a special discount just for this week</p>
                    </div>
                    <img src="../assets/time.png" alt="img-time">
                </div>
            </div>
        </section>
    `
}
export default Home;

