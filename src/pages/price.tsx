import Header from '../header'
import Intro from '../price/intro'
import Plan from '../price/plan'
import Information from '../price/information'
import Functions from '../price/functions'
import Footer from '../footer'


export default function Price() {
    return (
        <div>
            <Header primary={false} />
            <Intro />
            <Plan />
            <Functions />
            <Information />
            <Footer />
        </div>
    )
}