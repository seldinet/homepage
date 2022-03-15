import Header from '../header'
import Intro from '../price/intro'
import Plan from '../price/plan'
import Footer from '../footer'

export default function Price() {
    return (
        <div>
            <Header primary={false} />
            <Intro />
            <Plan />
            <Footer />
        </div>
    )
}