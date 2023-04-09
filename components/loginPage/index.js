import { useRouter } from "next/router";
import { useState } from "react";
import LoginFailModal from "./LoginFailModal";
import FastJobLogo from "../svgs/fastJobLogo";
import LoginPageDesign from "../svgs/loginPageDesign";

const skills = ["UI/UX", "Product Design", "Motion Graphics"];

function LoginPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginFail, setLoginFail] = useState(false);
  const router = useRouter();

  const formSubmit = async (e) => {
    e.preventDefault();

    setLoginFail(false);

    const loginApiEndPoint =
      "https://frontendtestapi.staging.fastjobs.io/auth/login";
    const payload = {
      username: userName,
      password: password,
    };
    const headerObject = {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    };
    const response = await fetch(loginApiEndPoint, {
      method: "POST",
      headers: headerObject,
      credentials: "include",
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "success") {
          router.push("/loggedInPage");
        } else if (data.statusCode === 401) {
          setLoginFail(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="relative loginFontFamily">
      <div className="container pt-[80px] ">
        <div>
          <FastJobLogo />
        </div>
        <div className="text-[#ffffff] font-medium text-[18px] leading-[27px] mt-[140px]">
          <div className="mb-[13px]">Congratulations!</div>
          <div className="font-semibold text-[32px] leading-[48px]">
            Company XYZ is inviting <br /> you to take an interview
          </div>
          <div className="mt-[18px]">Skills being assessed:</div>
          <div className="mt-[8px] flex items-center justify-start gap-[8px]">
            {skills.map((skill, i) => {
              return (
                <div
                  className="p-[10px] border-[1px] border-[#ffffff] rounded-[50px]"
                  key={i}
                >
                  {skill}
                </div>
              );
            })}
          </div>
          <div className="mt-[24px]">Don't be nervous.</div>
        </div>
      </div>
      <div className="absolute top-0 bottom-0 right-0">
        <LoginPageDesign />
      </div>
      <div className="absolute right-0 top-0 bg-[#1C1D21] min-w-[38%] min-h-[1024px] pt-[208px] pl-[80px] z-[10]">
        <div className="max-w-[300px]">
          <div className="text-[#ffffff] font-semibold text-[32px] leading-[48px]">
            For us to stay <br /> in touch
          </div>
          <form
            className="text-[15px] leading-[24px] text-[#B3B3B3] font-semibold mt-[24px]"
            onSubmit={(e) => {
              formSubmit(e);
            }}
          >
            <div>Username</div>
            <input
              className="bg-transparent border-[1px] border-[#ffffff] rounded-[12px] py-[11px] w-full px-[5px] mt-[8px]"
              type="text"
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              value={userName}
            />
            <div className="mt-[16px]">Password</div>
            <input
              className="bg-transparent border-[1px] border-[#ffffff] rounded-[12px] py-[11px] w-full px-[5px] mt-[8px]"
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
            />
            <button
              className="font-bold bg-[#B2BAFF] px-[115px] py-[12px] mt-[16px] rounded-[12px] text-[#ffffff]"
              disabled={userName === "" || password === "" }
              type="submit"
            >
              Continue
            </button>
          </form>
        </div>
      </div>
      <LoginFailModal
        shown={isLoginFail}
        close={() => {
          setLoginFail(false);
          setUserName("");
          setPassword("")
        }}
      />
    </div>
  );
}

export default LoginPage;
