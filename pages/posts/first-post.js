import Image from "next/image";
export default function FirstPost() {
    return(
        <>
        <h1>WELCOME TO FIRST-POST</h1>
        <Image src={"/hanu.jpeg"} width={400} height={300} alt="dsfsdf\" />
        </>
        );
  }