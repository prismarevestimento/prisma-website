import Image from "next/image";
import ProductImg from '@/public/services.jpg'
import Link from "next/link";

const data = [
    {
        'img': '@/public/services.jpg',
        'title': 'Industrial construction',
        'description': 'Waters make fish every without firmament saw had. Morning air subdue. Waters make fish every without firmament saw had. Morning air subdue. Waters make fish every without firmament saw had. Morning air subdue.'
    },
    {
        'img': '@/public/services.jpg',
        'title': 'Industrial construction Industrial construction',
        'description': 'Waters make fish every without firmament saw had. Morning air subdue. Waters make fish every without firmament saw had. Morning air subdue.'
    },
    {
        'img': '@/public/services.jpg',
        'title': 'Industrial construction',
        'description': 'Waters make fish every without firmament saw had. Morning air subdue. Waters make fish every without firmament saw had. Morning air subdue. Waters make fish every without firmament saw had. Morning air subdue. Waters make fish every without firmament saw had. Morning air subdue. Waters make fish every without firmament saw had. Morning air subdue. Waters make fish every without firmament saw had. Morning air subdue.'
    },
    {
        'img': '@/public/services.jpg',
        'title': 'Industrial',
        'description': 'Waters make fish every without firmament saw had. Morning air subdue. Waters make fish every without firmament saw had. Morning air subdue. Waters make fish every without firmament saw had. Morning air subdue.'
    },
]

const Products = () => {
    
    return (
        <section className="max-w-screen-xl mx-auto px-4 text-prisma-blue mt-10">
            <div>
                <div className="flex flex-col items-center">
                    <h2 className="text-center text-sm text-prisma-orange">Nossos Produtos</h2>
                    <p className="text-center text-5xl mt-5">Oferecemos uma variedade de produtos <br/> de alta qualidade</p>
                </div>
                {/* <div className="mt-24 flex items-center max-w-[700px] gap-x-7">
                    <Image src={ProductImg} alt="Produtos" width={300} height={260} className="rounded-md"/>
                    <div>
                        <h4 className="font-semibold text-2xl text-prisma-blue">Industrial construction</h4>
                        <p className="mt-5 text-prisma-blue">Waters make fish every without firmament saw had. Morning air subdue. Waters make fish every without firmament saw had. Morning air subdue. Waters make fish every without firmament saw had. Morning air subdue.</p>
                    </div>
                </div> */}
                <div className="grid grid-cols-2 gap-x-3 gap-y-8 justify-items-center">
                    {data.map((product, index) => {
                        return (
                            <div key={index} className="mt-24 flex items-center max-w-[700px] gap-x-7">
                                <Image src={ProductImg} alt="Produtos" width={300} height={260} className="rounded-md"/>
                                <div>
                                    <h4 className="font-semibold text-2xl text-prisma-blue">Industrial construction</h4>
                                    <p className="mt-5 text-prisma-blue">Waters make fish every without firmament saw had. Morning air subdue. Waters make fish every without firmament saw had. Morning air subdue. Waters make fish every without firmament saw had. Morning air subdue.</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <Link href="/produtos" className="bg-prisma-orange text-center mt-14 max-w-[200px] w-full flex justify-center m-auto p-4 text-[#FFFFFF] hover:bg-prisma-orange-hover">Confira mais produtos</Link>
        </section>
    );
}
 
export default Products;