import BlogSingleContent from "../../components/blog/BlogSingleContent";
import BodyWrapper from "../../components/classes/BodyWrapper";
import LayoutV5 from "../../components/layouts/LayoutV5";
import BlogData from '../../assets/jsonData/blog/BlogData.json';
import { useParams } from "react-router-dom";

const BlogSinglePage = () => {

    const { id } = useParams()
    const data = BlogData.find(blog => blog.id === parseInt(id || '0'));

    return (
        <>
            <LayoutV5 breadCrumb="blog-single" title="Blog Single">
                {data && <BlogSingleContent blogInfo={data} />}
                {!data && <div>No Data Found</div>}
                <BodyWrapper />
            </LayoutV5>
        </>
    );
};

export default BlogSinglePage;