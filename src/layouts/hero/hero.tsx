import Button from "@mui/material/Button";

const Hero = () => {
  return (
    <>
      <div className="bg-cover bg-center w-full bg-[url('https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWJLAy?ver=40fe&q=90&m=6&h=472&w=1259&b=%23FFFFFFFF&l=f&o=t&x=1440&y=250&aim=true')] ">
        <div className="w-full md:px-20 px-2 py-10">
          <h1 className="text-white font-bold text-4xl">
            Microsoft 365 roadmap
          </h1>
          <p className="text-white mt-3 w-[50%]">
            Get the latest updates on our best-in-class productivity apps and
            intelligent cloud services. Rethink productivity, streamline
            business processes, and protect your business with Microsoft 365.
          </p>
          <Button
            variant="outlined"
            className="!mt-5 !border-2 !border-white !px-5 !normal-case !text-white !bg-blue-500 !hover:bg-blue-600"
          >
            Using this roadmap
          </Button>
        </div>
      </div>
    </>
  );
};

export default Hero;
