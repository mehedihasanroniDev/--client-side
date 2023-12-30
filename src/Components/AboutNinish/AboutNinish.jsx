import logo from '../../assets/images/Logo/logo.png'
import { FaRegUserCircle } from "react-icons/fa";

const AboutNinish = () => {
    return (
        <div className='max-w-[1200px] mx-auto px-3 xl:px-0 py-14 '>
            <div className="text-center pb-16">
                    <p className="flex justify-center items-center gap-1 text-sm text-violet-800 font-semibold">
                        <span>
                            <FaRegUserCircle/>
                        </span>
                        নিণীষ
                    </p>
                    <h1 className="text-4xl sm:text-5xl font-semibold mt-2">আমাদের সম্পর্কে</h1>
                </div>

                <div className="bg-violet-900 text-white text-justify px-4 md:px-12 py-12 rounded-md mb-8">
                    <div className=" mx-auto mb-4">
                        <img src={logo} className='h-[3.5rem] w-fit mx-auto' alt="Ninish Logo" />
                    </div>
                    <p className="text-lg">
                        নিণীষ শিক্ষার্থীদের সহ-শিক্ষা কার্যক্রম ভিত্তিক একটি শিক্ষামূলক অনলাইন প্লাটফর্ম যেখানে
                        বিভিন্ন বিশ্ববিদ্যালয়ে পড়ুয়া মেধাবী শিক্ষার্থীরা কাজ করে স্কুল, কলেজ এবং বিশ্ববিদ্যালয় পড়ুয়া
                        শিক্ষার্থীদের মেধা বিকাশে, আয়োজন করে বিভিন্ন প্রকার সহ-শিক্ষা কার্যক্রম যেমনঃ বিতর্ক
                        প্রতিযোগিতা, কুইজ প্রতিযগিতা, খেলাধুলা ভিত্তিক প্রতিযোগিতা সহ পরবর্তী প্রজন্মকে
                        আত্নকর্মসংস্থান ভিত্তিক গড়ে তোলার জন্য বিভিন্ন উদ্যোগ নেয় যা মেধাবী জাতি গঠনে সহায়তা করবে।
                        নিণীষ এর স্বপ্ন আছে, লক্ষ্য আছে, আছে পরিকল্পনা এবং কর্মচঞ্চলতা। নিণীষ এর যাত্রা শুরু হয় ২০২০
                        সালে মুজিববর্ষে জাতির জনক বঙ্গবন্ধু শেখ মুজিবুর রহমান কে নিয়ে খুলনা বিভাগ এবং বরিশাল বিভাগে
                        মুজিব অলিম্পিয়াড ২০২০ এবং মুজিববর্ষ বিতর্ক প্রতিযোগিতা ২০২০ আয়োজনের মাধ্যমে। পরবর্তীতে
                        করোনার কারনে অন্যান্য বিভাগীয় পর্ব সম্পন্ন করা সম্ভব হয় নি। ২০২০-২০২১ এই পুরো সময়টাতে নিণীষ
                        অনলাইন প্লাটফর্ম ডিসকর্ড ব্যবহার করে অনলাইন ভিত্তিক ৫৬টি বিতর্ক প্রতিযোগিতার আয়োজন করে, যার
                        ভিতরে অনলাইন ভিত্তিক দক্ষিণ এশিয়ার সবচেয়ে বড় বিতর্ক প্রতিযোগিতা - Wilderness Open 2020 এর
                        আয়োজক ছিলো নিণীষ। উক্ত প্রতিযোগিতায় পুরো বিশ্ব থেকে ১২০ টি দল অংশগ্রহণ করে। এছাড়াও ২০২২
                        সালের সেপ্টেম্বর-অক্টোবর মাস জুড়ে নিণীষ গাজীপুর জেলার ৫৬ টি স্কুল নিয়ে ইন্টার স্কুল টেবিল
                        টেনিস টুর্নামেন্ট, ২০২৩ সালের ফেব্রুয়ারি মাস জুড়ে খুলনা জেলার ১২ টি স্কুল নিয়ে ইন্টার স্কুল
                        ফুটবল টুর্নামেন্ট আয়োজন করে। আমারা চাই আগামীর তরুণ প্রজন্ম ডিজিটাল প্লাটফর্ম ব্যবহার করে তার
                        সহ-শিক্ষা কার্যক্রম এর চর্চা বৃদ্ধি করুক। আমরা বিশ্বাস করি গতানুগতিক শিক্ষার পাশাপাশি
                        সহ-শিক্ষার চর্চা একজন শিক্ষার্থীর মেধা বিকাশে অত্যন্ত গুরুত্বপূর্ণ ভূমিকা পালন করে। একঝাক
                        তরুন মেধাবী এবং উদ্ভাবনী চিন্তাধারার তরুনদের নিয়ে গঠিত নিণীষ এর নেতৃত্ব। যাদের নিরলস
                        প্রচেষ্ঠা এগিয়ে নিয়ে যাচ্ছে নিণীষ-কে, জাতিকে জানতে সাহায্য করছে আজ এবং আগামীর বাংলাদেশ
                        সম্পর্কে, অনুধাবন করাচ্ছে বাংলাদেশের শেকড়-কে।
                    </p>

                </div>
        </div>
    );
};

export default AboutNinish;