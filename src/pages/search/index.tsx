import {useRouter} from "next/router"; // hook
// router라는 객체를 컴포넌트 내부에서 사용할 수 있도록 반환해주는 함수

export default function Page() {
    const router = useRouter(); //router라는 변수로 결과값 저장
    
    //const q = router.query.q 쿼리스트링을 꺼내와서 담음
    const {q} = router.query; // 구조분해 할당 방식


    return <h1>Search {q}</h1>;
}