import React from "react";
import { Link } from "react-router-dom";
const WidthWrap = React.lazy(
  () => import("@shared-comps/WidthWrap")
);

const bgs = {
  hero: "https://img.freepik.com/free-vector/flat-abstract-wireframe-background_23-2148995803.jpg?w=1380&t=st=1674023943~exp=1674024543~hmac=9468315485f6bd13af61e338e030f18dce3897acfd323e300926fae9394b4e8c",
  chatImg:
    "https://img.freepik.com/free-vector/users-with-speech-bubbles-vector_53876-82250.jpg?w=740&t=st=1674024165~exp=1674024765~hmac=86164ee5611d06c974648da0fb5ed893eb8245e1810def389ba802c1877a9960",
  channelImg:
    "https://img.freepik.com/free-vector/group-therapy-illustration-concept_52683-45775.jpg?w=1380&t=st=1674025760~exp=1674026360~hmac=b134415a75084447833c47f30510c78500ccc1f80b3343fc7e6adc282228a6c7",
};

const LandingPage = () => {
  // Check scroll position
  // if scrolled by 50px, change bg color
  // else, change bg color to transparent
  const [scrollHeight, setScrollHeight] = React.useState(0);
  const bgThreshold = (height: number) => (height > 300 ? true : false);
  React.useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollHeight(position);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollHeight]);

  return (
    <div className="min-h-screen text-neutral-50">
      {/* Header */}
      <div
        className={`bg-fixed bg-center bg-no-repeat bg-cover transition-all ease-linear duration-500 sticky top-0 z-[10000] ${
          bgThreshold(scrollHeight)
            ? "bg-orange-100 text-neutral-600"
            : "bg-transparent"
        }`}
        style={{
          backgroundImage: bgThreshold(scrollHeight)
            ? ""
            : `url('${bgs.hero}')`,
        }}
      >
        <WidthWrap>
          <div className="w-full flex justify-between py-3">
            <h1 className="text-4xl font-bold">Agriboost connect</h1>
            <div className="flex gap-4">
              {["login", "register"].map((item, index) => {
                return (
                  <div
                    key={index}
                    className="px-4 py-2 rounded text-2xl capitalize border even:border even:hover:border-transparent odd:hover:border "
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
        </WidthWrap>
      </div>
      {/* Hero */}
      <div
        className="min-h-[60vh] bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url('${bgs.hero}')` }}
      >
        <WidthWrap>
          <div className="py-20 flex items-center">
            <div className="relative md:grid md:grid-cols-2 items-center gap-4 justify-center">
              <div className="flex flex-col gap-4">
                <h1>
                  <span className="text-5xl font-bold font-Rubik-Mono-One">
                    Let's connect
                  </span>
                </h1>
                <p className="text-2xl font-bold">
                  Connect with your friends and other farmers across the network
                </p>
                <Link
                  to={"/social/chat"}
                  className="text-3xl font-bold w-fit rounded-md bg-orange-400 py-2 px-6"
                >
                  Get started
                </Link>
              </div>
              <div>
                <img
                  src={bgs.chatImg}
                  alt=""
                  className="h-96 aspect-square rounded-tl-[50%] rounded-br-[50%] rounded-tr-[50%]"
                />
              </div>
            </div>
          </div>
        </WidthWrap>
      </div>
      {/* Properties/Features */}
      <div>
        <WidthWrap>
          <div className="py-20 flex flex-col">
            <h1 className="font-Rubik-Mono-One text-6xl bg-gradient-to-r from-amber-600 to-emerald-600 bg-clip-text text-transparent">
              Our
              <br /> Features
            </h1>
            <hr className="my-6" />
            <div className="text-neutral-600">
              {/* One on one conversations */}
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="py-10 px-10 flex flex-col gap-4 justify-center">
                  <h1 className="text-5xl font-bold">
                    One on one conversations with your friends and other farmers
                  </h1>
                  <p className="text-2xl">
                    Get to know your friends and other farmers across the
                    network and share your experiences with them and get to know
                    them better and learn from them as well.
                  </p>
                  <Link
                    to={"/"}
                    className="px-6 w-fit bg-orange-300 py-2 text-2xl rounded"
                  >
                    Learn more
                  </Link>
                </div>
                <div>
                  <img
                    src={bgs.channelImg}
                    alt=""
                    className='rounded-tl-[50%] rounded-br-[50%] rounded-tr-[50%]"'
                  />
                </div>
              </div>
              {/* Channel chats */}
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div>
                    <img
                      src={bgs.channelImg}
                      alt=""
                      className='rounded-tl-[50%] rounded-br-[50%] rounded-tr-[50%]"'
                    />
                  </div>
                  <div className="py-10 px-10 flex flex-col gap-4 justify-center">
                    <h1 className="text-5xl  font-bold">Channel chats</h1>
                    <p className="text-2xl">
                      Get to know your friends and other farmers across the
                      network and share your experiences with them and get to
                      know them better and learn from them as well.
                    </p>
                    <Link
                      to={"/"}
                      className="px-6 w-fit bg-orange-300 py-2 text-2xl rounded"
                    >
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
              {/* Media posts */}
              <div></div>
            </div>
          </div>
        </WidthWrap>
      </div>
    </div>
  );
};

export default LandingPage;
