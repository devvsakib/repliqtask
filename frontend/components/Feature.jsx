import { BsCashCoin } from "react-icons/bs"
import { BiSupport } from "react-icons/bi"
import { TbTruckDelivery } from "react-icons/tb"
import { GiDeliveryDrone } from "react-icons/gi"

const Feature = () => {
    return (
        <div className="py-20" >
            <div className="grid lg:grid-cols-2 gap-10">
                <div>
                    <h2 className="text-5xl md:text-6xl text-center lg:text-left mb-2">A smart view <br /> in YOU</h2>
                    <p className="text-sm">Best phone for best person. Best price and best quality. Get your FantasY device now!
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-10">
                    <div>
                        <button className="w-24 h-24 rounded-lg bg-primary/20 flex justify-center items-center"><TbTruckDelivery className="text-4xl" /></button>
                        <h3 className="text-xl my-2 font-semibold text-primary">Super fast</h3>
                        <p>
                            Our service is super fast. We always try to give our best service to our customers.
                        </p>
                    </div>
                    <div>
                        <button className="w-24 h-24 rounded-lg bg-primary/20 flex justify-center items-center"><BsCashCoin className="text-4xl" /></button>
                        <h3 className="text-xl my-2 font-semibold text-primary">Cash Back in every Phone</h3>
                        <p>
                            Get cash back in every phone you buy from us. We always try to give our best service to our customers.
                        </p>
                    </div>
                    <div>
                        <button className="w-24 h-24 rounded-lg bg-primary/20 flex justify-center items-center"><BiSupport className="text-4xl" /></button>
                        <h3 className="text-xl my-2 font-semibold text-primary">Best Support</h3>
                        <p>
                            We provide the best support to our customers. We always try to give our best service to our customers.
                        </p>
                    </div>
                    <div>
                        <button className="w-24 h-24 rounded-lg bg-primary/20 flex justify-center items-center"><GiDeliveryDrone className="text-4xl" /></button>
                        <h3 className="text-xl my-2 font-semibold text-primary">Special Drone Delivery</h3>
                        <p>
                            We provide special drone delivery to our customers. We always try to give our best service to our customers.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feature