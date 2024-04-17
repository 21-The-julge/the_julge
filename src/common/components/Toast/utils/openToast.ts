import { Bounce, toast } from "react-toastify";
import { ToastText } from "@/common/components/Toast/constants/ToastText";

type TostType = keyof ToastText;

export default function openToast(type: TostType, text: string) {
  toast[type](text, {
    position: "bottom-center", // 위치
    autoClose: 3_000, // 시간
    hideProgressBar: false, // 로딩 바
    closeOnClick: true, // 클릭 -> 닫기
    pauseOnHover: false, // 마우스 오버 시간 멈추기
    draggable: false, // 드래그로 닫기
    progress: undefined, // 0이나 1을 넣으면 로딩 바 안움직임
    theme: "light",
    transition: Bounce, // 애니메이션
  });
}