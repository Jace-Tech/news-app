import { View, Text, ImageBackground, Dimensions, Pressable, FlatList } from 'react-native'
import React from 'react'
import Layout from '../components/Layout'
import { useNewContext } from '../contexts/NewsContext';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import HomeSkeleton from '../skeletons/HomeSkeleton';
import NewsCard from '../components/NewsCard';
import { useNavigation } from '@react-navigation/native';


const HomeScreen = () => {
    const { news, brandNews: dome, topic } = useNewContext();
    const {navigate} = useNavigation();
    const handleRedirect = async (url: string) => {
        await WebBrowser.openBrowserAsync(url);
    }

    const data = [
        {
            "summary": "Theo PGS.TS Nguyễn Thu Thủy, Vụ trưởng Vụ Giáo dục đại học, việc một số trường đại học yêu cầu thí sinh phải cam kết đặt nguyện vọng đã trúng tuyển làm NV1, thậm chí bắt thí sinh nộp tiền đặt cọc là việc làm vi phạm các nguyên tắc quy định trong Quy chế tuyển sinh 2022. Cụ thể, nguyên tắc công bằng đối với thí sinh được quy định trong Điều 4, Quy chế: PGS.TS Nguyễn Thu Thủy, Vụ trưởng Vụ Giáo dục đại học Về cung cấp thông tin: Mỗi thí sinh quan tâm được cung cấp thông tin đầy đủ, rõ ràng, tin cậy, nhất quán và kịp thời để có quyết định phù hợp và chuẩn bị tốt nhất cho việc tham gia tuyển sinh; Về cơ hội dự tuyển: Không thí sinh nào bị mất cơ hội dự tuyển do những quy định không liên quan tới trình độ, năng lực (trừ những quy định của Bộ Công an và Bộ Quốc phòng mang tính đặc thù trong lĩnh vực quốc phòng, an ninh); hoặc do quy trình tuyển sinh gây phiền hà, tốn kém; Về đánh giá năng lực: Thí sinh phải được đánh giá khách quan, công bằng và tin cậy về khả năng học tập và triển vọng thành công, đáp ứng yêu cầu của chương trình và ngành đào tạo; Về cơ hội trúng tuyển: Thí sinh phải được tạo cơ hội trúng tuyển cao nhất và quyền xác định nguyện vọng ưu tiên trong số những chương trình, ngành đào tạo đủ điều kiện trúng tuyển; Về thực hiện cam kết: Cơ sở đào tạo phải thực hiện các cam kết đối với thí sinh; tư vấn, hỗ trợ và giải quyết khiếu nại, bảo vệ quyền lợi chính đáng của thí sinh trong những trường hợp rủi ro.",
            "country": "VN",
            "author": "VCCorp.vn",
            "link": "https://afamily.vn/se-xu-phat-cac-truong-dai-hoc-ep-thi-sinh-phai-dat-nv1-20220723104914096.chn",
            "language": "en",
            "media": "https://afamilycdn.com/thumb_w/600/150157425591193600/2022/7/23/avatar1658546727126-16585467275711472645200-0-0-628-1200-crop-1658547123632208918752.jpg",
            "title": "Sẽ xử phạt các trường đại học ép' thí sinh phải đặt NV1",
            "clean_url": "indiedb.com",
            "media_content": [
                "https://media.indiedb.com/cache/images/games/1/80/79477/crop_120x90/Kingdom_of_Atham.jpg",

                "https://b.scorecardresearch.com/p?c1=2&c2=8518622&cs_ucfr=0&cv=2.0&cj=1",

                "https://media.indiedb.com/images/giveaways/1/2/1195/Kingdom_of_Atham.jpg"
            ],
            "rights": "Copyright 2022, DBolical Pty Ltd",
            "rank": 14000,
            "topic": "gaming",
            "published_date": "2022-07-24 00:00:00",
            "_id": "usdicjdscdsknsdnsdcdscbdsjkbjbjkb",
        },
        {
            "summary": "Theo PGS.TS Nguyễn Thu Thủy, Vụ trưởng Vụ Giáo dục đại học, việc một số trường đại học yêu cầu thí sinh phải cam kết đặt nguyện vọng đã trúng tuyển làm NV1, thậm chí bắt thí sinh nộp tiền đặt cọc là việc làm vi phạm các nguyên tắc quy định trong Quy chế tuyển sinh 2022. Cụ thể, nguyên tắc công bằng đối với thí sinh được quy định trong Điều 4, Quy chế: PGS.TS Nguyễn Thu Thủy, Vụ trưởng Vụ Giáo dục đại học Về cung cấp thông tin: Mỗi thí sinh quan tâm được cung cấp thông tin đầy đủ, rõ ràng, tin cậy, nhất quán và kịp thời để có quyết định phù hợp và chuẩn bị tốt nhất cho việc tham gia tuyển sinh; Về cơ hội dự tuyển: Không thí sinh nào bị mất cơ hội dự tuyển do những quy định không liên quan tới trình độ, năng lực (trừ những quy định của Bộ Công an và Bộ Quốc phòng mang tính đặc thù trong lĩnh vực quốc phòng, an ninh); hoặc do quy trình tuyển sinh gây phiền hà, tốn kém; Về đánh giá năng lực: Thí sinh phải được đánh giá khách quan, công bằng và tin cậy về khả năng học tập và triển vọng thành công, đáp ứng yêu cầu của chương trình và ngành đào tạo; Về cơ hội trúng tuyển: Thí sinh phải được tạo cơ hội trúng tuyển cao nhất và quyền xác định nguyện vọng ưu tiên trong số những chương trình, ngành đào tạo đủ điều kiện trúng tuyển; Về thực hiện cam kết: Cơ sở đào tạo phải thực hiện các cam kết đối với thí sinh; tư vấn, hỗ trợ và giải quyết khiếu nại, bảo vệ quyền lợi chính đáng của thí sinh trong những trường hợp rủi ro.",
            "country": "VN",
            "author": "VCCorp.vn",
            "link": "https://afamily.vn/se-xu-phat-cac-truong-dai-hoc-ep-thi-sinh-phai-dat-nv1-20220723104914096.chn",
            "language": "en",
            "media": "https://afamilycdn.com/thumb_w/600/150157425591193600/2022/7/23/avatar1658546727126-16585467275711472645200-0-0-628-1200-crop-1658547123632208918752.jpg",
            "title": "Sẽ xử phạt các trường đại học ép' thí sinh phải đặt NV1",
            "clean_url": "indiedb.com",
            "media_content": [
                "https://media.indiedb.com/cache/images/games/1/80/79477/crop_120x90/Kingdom_of_Atham.jpg",

                "https://b.scorecardresearch.com/p?c1=2&c2=8518622&cs_ucfr=0&cv=2.0&cj=1",

                "https://media.indiedb.com/images/giveaways/1/2/1195/Kingdom_of_Atham.jpg"
            ],
            "rights": "Copyright 2022, DBolical Pty Ltd",
            "rank": 14000,
            "topic": "gaming",
            "published_date": "2022-07-24 00:00:00",
            "_id": "91fc773eeba38e29938ec549e1db755aasucbjscbbhsdhc",
        },
        {
            "summary": "Theo PGS.TS Nguyễn Thu Thủy, Vụ trưởng Vụ Giáo dục đại học, việc một số trường đại học yêu cầu thí sinh phải cam kết đặt nguyện vọng đã trúng tuyển làm NV1, thậm chí bắt thí sinh nộp tiền đặt cọc là việc làm vi phạm các nguyên tắc quy định trong Quy chế tuyển sinh 2022. Cụ thể, nguyên tắc công bằng đối với thí sinh được quy định trong Điều 4, Quy chế: PGS.TS Nguyễn Thu Thủy, Vụ trưởng Vụ Giáo dục đại học Về cung cấp thông tin: Mỗi thí sinh quan tâm được cung cấp thông tin đầy đủ, rõ ràng, tin cậy, nhất quán và kịp thời để có quyết định phù hợp và chuẩn bị tốt nhất cho việc tham gia tuyển sinh; Về cơ hội dự tuyển: Không thí sinh nào bị mất cơ hội dự tuyển do những quy định không liên quan tới trình độ, năng lực (trừ những quy định của Bộ Công an và Bộ Quốc phòng mang tính đặc thù trong lĩnh vực quốc phòng, an ninh); hoặc do quy trình tuyển sinh gây phiền hà, tốn kém; Về đánh giá năng lực: Thí sinh phải được đánh giá khách quan, công bằng và tin cậy về khả năng học tập và triển vọng thành công, đáp ứng yêu cầu của chương trình và ngành đào tạo; Về cơ hội trúng tuyển: Thí sinh phải được tạo cơ hội trúng tuyển cao nhất và quyền xác định nguyện vọng ưu tiên trong số những chương trình, ngành đào tạo đủ điều kiện trúng tuyển; Về thực hiện cam kết: Cơ sở đào tạo phải thực hiện các cam kết đối với thí sinh; tư vấn, hỗ trợ và giải quyết khiếu nại, bảo vệ quyền lợi chính đáng của thí sinh trong những trường hợp rủi ro.",
            "country": "VN",
            "author": "VCCorp.vn",
            "link": "https://afamily.vn/se-xu-phat-cac-truong-dai-hoc-ep-thi-sinh-phai-dat-nv1-20220723104914096.chn",
            "language": "en",
            "media": "https://afamilycdn.com/thumb_w/600/150157425591193600/2022/7/23/avatar1658546727126-16585467275711472645200-0-0-628-1200-crop-1658547123632208918752.jpg",
            "title": "Sẽ xử phạt các trường đại học ép' thí sinh phải đặt NV1",
            "clean_url": "indiedb.com",
            "media_content": [
                "https://media.indiedb.com/cache/images/games/1/80/79477/crop_120x90/Kingdom_of_Atham.jpg",

                "https://b.scorecardresearch.com/p?c1=2&c2=8518622&cs_ucfr=0&cv=2.0&cj=1",

                "https://media.indiedb.com/images/giveaways/1/2/1195/Kingdom_of_Atham.jpg"
            ],
            "rights": "Copyright 2022, DBolical Pty Ltd",
            "rank": 14000,
            "topic": "gaming",
            "published_date": "2022-07-24 00:00:00",
            "_id": "sdcsdcdsdvdvdsnvdsvdsvdvjdsvbdjs",
        },
        {
            "summary": "Theo PGS.TS Nguyễn Thu Thủy, Vụ trưởng Vụ Giáo dục đại học, việc một số trường đại học yêu cầu thí sinh phải cam kết đặt nguyện vọng đã trúng tuyển làm NV1, thậm chí bắt thí sinh nộp tiền đặt cọc là việc làm vi phạm các nguyên tắc quy định trong Quy chế tuyển sinh 2022. Cụ thể, nguyên tắc công bằng đối với thí sinh được quy định trong Điều 4, Quy chế: PGS.TS Nguyễn Thu Thủy, Vụ trưởng Vụ Giáo dục đại học Về cung cấp thông tin: Mỗi thí sinh quan tâm được cung cấp thông tin đầy đủ, rõ ràng, tin cậy, nhất quán và kịp thời để có quyết định phù hợp và chuẩn bị tốt nhất cho việc tham gia tuyển sinh; Về cơ hội dự tuyển: Không thí sinh nào bị mất cơ hội dự tuyển do những quy định không liên quan tới trình độ, năng lực (trừ những quy định của Bộ Công an và Bộ Quốc phòng mang tính đặc thù trong lĩnh vực quốc phòng, an ninh); hoặc do quy trình tuyển sinh gây phiền hà, tốn kém; Về đánh giá năng lực: Thí sinh phải được đánh giá khách quan, công bằng và tin cậy về khả năng học tập và triển vọng thành công, đáp ứng yêu cầu của chương trình và ngành đào tạo; Về cơ hội trúng tuyển: Thí sinh phải được tạo cơ hội trúng tuyển cao nhất và quyền xác định nguyện vọng ưu tiên trong số những chương trình, ngành đào tạo đủ điều kiện trúng tuyển; Về thực hiện cam kết: Cơ sở đào tạo phải thực hiện các cam kết đối với thí sinh; tư vấn, hỗ trợ và giải quyết khiếu nại, bảo vệ quyền lợi chính đáng của thí sinh trong những trường hợp rủi ro.",
            "country": "VN",
            "author": "VCCorp.vn",
            "link": "https://afamily.vn/se-xu-phat-cac-truong-dai-hoc-ep-thi-sinh-phai-dat-nv1-20220723104914096.chn",
            "language": "en",
            "media": "https://afamilycdn.com/thumb_w/600/150157425591193600/2022/7/23/avatar1658546727126-16585467275711472645200-0-0-628-1200-crop-1658547123632208918752.jpg",
            "title": "Sẽ xử phạt các trường đại học ép' thí sinh phải đặt NV1",
            "clean_url": "indiedb.com",
            "media_content": [
                "https://media.indiedb.com/cache/images/games/1/80/79477/crop_120x90/Kingdom_of_Atham.jpg",

                "https://b.scorecardresearch.com/p?c1=2&c2=8518622&cs_ucfr=0&cv=2.0&cj=1",

                "https://media.indiedb.com/images/giveaways/1/2/1195/Kingdom_of_Atham.jpg"
            ],
            "rights": "Copyright 2022, DBolical Pty Ltd",
            "rank": 14000,
            "topic": "gaming",
            "published_date": "2022-07-24 00:00:00",
            "_id": "91fc773eeba38e29938ec549e1db755acknvkdndnvdkdscd",
        }
    ]
    const brandNews = data[0]

    // if(!news?.length) {
    //     return (
    //         <HomeSkeleton />
    //     )
    // }
    
    return (
        <Layout>
            <View className="w-full h-full">
                <View className="h-[47%] relative">
                    <View className="absolute top-0 left-0 h-full w-full bg-black z-10 opacity-75" />
                    <ImageBackground source={{ uri: brandNews?.media }} resizeMode={"cover"} style={{ width: "100%", height: "100%" }}>
                        <View className="px-5 flex w-full h-full justify-end relative z-40">
                            <Text className="items-center uppercase justify-center flex  rounded-full tracking-widest text-purple-600 text-xs font-bold ">{ topic }</Text>
                            <Text className="text-xl mt-2 text-white font-bold">{ brandNews?.title }</Text>
                            <Pressable className="my-4 py-1 flex items-center flex-row" onPress={() => handleRedirect(brandNews?.link)}>
                                <Text className="text-white font-bold mr-2">Read More</Text>
                                <Ionicons name="ios-arrow-forward" size={22} color="white" />
                            </Pressable>
                        </View>
                    </ImageBackground>
                </View>

                <View className="flex-1 w-full px-4 flex">
                    <View className="flex flex-row items-center justify-between py-3">
                        <Text className="text-xl font-bold capitalize">{topic}</Text>

                        <Pressable className="flex flex-row items-center" onPress={() => handleRedirect("/")}>
                            <Text className="text-sm text-gray-600 mr-2"> More</Text>
                            <Ionicons name="ios-arrow-forward" size={20} color="gray" />
                        </Pressable>
                    </View>

                    <FlatList 
                        data={data} 
                        keyExtractor={(item) => item._id} 
                        decelerationRate="fast"
                        snapToAlignment='start'
                        snapToInterval={Dimensions.get("screen").width / 1.4 }
                        horizontal
                        contentContainerStyle={{alignItems: 'stretch'}}
                        renderItem={({ item }) => (
                            <NewsCard id={item._id} image={item.media} author={item.author} title={item.title} date={item.published_date} />
                    )} />
                </View>
            </View>
        </Layout>
    )
}

export default HomeScreen