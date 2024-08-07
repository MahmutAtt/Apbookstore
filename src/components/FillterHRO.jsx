import { AutoSlider } from "./AutoSlider";

const title = (<> A library you’ll want<br/> to get lost in.</>);
const description = "Browse our global catalog featuring millions of bestsellers, new releases, and classics — with new audiobooks and ebooks added every week.";
const bestselling = [
    { src: '/assets/images/book_01.jpg', title: 'Nuclear War', author: 'Rebecca Yarros' },
    { src: '/assets/images/book_02.jpg', title: 'Conviction', author: 'Denise Mina' },
    { src: '/assets/images/book_03.jpg', title: 'Hillbilly Elegy', author: 'Sarah J.Maas' },
    { src: '/assets/images/book_04.jpg', title: 'Harry Poter', author: 'Liz Moore' },
    { src: '/assets/images/book_05.jpg', title: 'Irom Flame', author: 'Tessa Bailey' },
    { src: '/assets/images/book_06.jpg', title: 'Irom Flame', author: 'Tessa Bailey' },
    { src: '/assets/images/book_07.jpg', title: 'Irom Flame', author: 'Tessa Bailey' },
  ];

  const trending = [
    { src: '/assets/images/book_08.jpg', title: 'Harry Poter', author: 'Liz Moore' },
    { src: '/assets/images/book_09.jpg', title: 'Conviction', author: 'Denise Mina' },
    { src: '/assets/images/book_10.jpg', title: 'Hillbilly Elegy', author: 'Sarah J.Maas' },
    { src: '/assets/images/book_11.jpg', title: 'Nuclear War', author: 'Rebecca Yarros' },
    { src: '/assets/images/book_12.jpg', title: 'Nuclear War', author: 'Rebecca Yarros' },
    { src: '/assets/images/book_13.jpg', title: 'Nuclear War', author: 'Rebecca Yarros' },
    { src: '/assets/images/book_14.jpg', title: 'Nuclear War', author: 'Rebecca Yarros' },
  ];


export const FillterHRO = () => {
  return (
    <section className="bg-center bg-no-repeat text-gray-900 dark:bg-gray-800 dark:text-yellow-400">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-non text md:text-5xl lg:text-6xl">{title}</h1>
              <p className="mb-8 text-lg font-normal dark:text-blue-100 lg:text-xl sm:px-16 lg:px-48"> {description}</p>
                <div className="flex justify-center">
                    <div>
 
                        <ul className="flex flex-col sm:flex-row rounded-xl sm:rounded-full justify-center align-middle hover:bg-yellow-500 gap-3 text-sm bg-blue-500 dark:text-white p-2">
                           <li className="px-4 py-2 rounded-full cursor-pointer select-none hover:bg-green-600 text-white">Bestelling Aaudiobooks</li>
                           <li className="px-4 py-2 rounded-full cursor-pointer select-none bg-gray-900 text-white">New &Trending Ebooks</li>
                           <li className="px-4 py-2 rounded-full cursor-pointer select-none hover:bg-white">Fan-Favorite Audiobooks</li>
                        </ul>
                    </div>

                </div> 
                <AutoSlider images={bestselling} duration={40} />

                <AutoSlider images={trending} duration={50} />

        </div>
    </section>
  )
}
