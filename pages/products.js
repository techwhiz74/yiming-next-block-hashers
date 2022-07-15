import React from 'react'

const products = () => {

    const Products = [
        { title: "Image", name: "Shadow bitch", dexcription: "This is simple Product", img: "https://dummyimage.com/420x260", price: 12 },
        { title: "Image", name: "Shadow bitch", dexcription: "This is simple Product", img: "https://dummyimage.com/420x260", price: 12 },
        { title: "Image", name: "Shadow bitch", dexcription: "This is simple Product", img: "https://dummyimage.com/420x260", price: 12 },
        { title: "Image", name: "Shadow bitch", dexcription: "This is simple Product", img: "https://dummyimage.com/420x260", price: 12 },
        { title: "Image", name: "Shadow bitch", dexcription: "This is simple Product", img: "https://dummyimage.com/420x260", price: 12 },
        { title: "Image", name: "Shadow bitch", dexcription: "This is simple Product", img: "https://dummyimage.com/420x260", price: 12 },
        { title: "Image", name: "Shadow bitch", dexcription: "This is simple Product", img: "https://dummyimage.com/420x260", price: 12 },
        { title: "Image", name: "Shadow bitch", dexcription: "This is simple Product", img: "https://dummyimage.com/420x260", price: 12 },
        { title: "Image", name: "Shadow bitch", dexcription: "This is simple Product", img: "https://dummyimage.com/420x260", price: 12 },
    ]





    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4 ">

                        {Products.map((product , index) => (
                        <div key={index} className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-lg">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={product.img} />
                            </a>
                            <div className="mt-4">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3><h3>{` ${product.title}`}</h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium">{product.name}</h2>
                                <p className="mt-1">{`${product.price} tz`}</p>
                            </div>
                        </div>))}

                    </div>
                </div>
            </section>
        </div>
    )
}



// //use getserversideprops to fetch from DB
// export async function getServerSideProps(context) {
//     // console.log("hi guys");

//     if (!mongoose.connections[0].readyState) {
//         await mongoose.connect(process.env.MONGO_URL)
//         // console.log("fggfjfjhg")
//     }
//     let Products = await Product.find({ category: 'T-Shart' })

//     let tshart = {}
//     // console.log(Products)
//     for (let item of Products) {
//         if (item.userId in tshart) {
//             if (!tshart[item.userId].color.includes[item.color] && item.availableQty > 0) {
//                 tshart[item.userId].color.push(item.color)
//             }
//             if (!tshart[item.userId].size.includes[item.size] && item.availableQty > 0) {
//                 tshart[item.userId].size.push(item.size)
//             }
//         }
//         else {
//             tshart[item.userId] = JSON.parse(JSON.stringify(item))
//             if (item.availableQty > 0) {
//                 tshart[item.userId].color = [item.color]
//                 tshart[item.userId].size = [item.size]
//             }
//         }
//         // console.log(tshart);

//     }
//     return {
//         props: { Products: JSON.parse(JSON.stringify(tshart)) }
//     }

// }


export default products