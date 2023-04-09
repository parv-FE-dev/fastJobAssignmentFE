import CenterCircle from "./centerCircle";
import OuterCircle from "./outerCircle";
import SmallCircle from "./smallCircle";
import style from './loginPageDesign.module.scss';

function LoginPageDesign() {
  return (
    <div className="absolute right-[140px] z-[1]">
      <div className={`absolute top-0 right-0`}>
        <OuterCircle/>
      </div>
      <div className="absolute top-[45px] right-0">
        <CenterCircle />
      </div>
      <div className="absolute top-[250px] right-[210px]">
        <SmallCircle />
      </div>

    </div>
  );
}

export default LoginPageDesign;
