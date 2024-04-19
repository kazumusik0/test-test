import Image from "next/image";

export function ChurchEmployeeBlock() {
  return (
    <div className="flex flex-col items-center">
      <div className="group flex cursor-pointer flex-col items-center">
        <div className="relative flex size-[150px] items-center justify-center overflow-hidden rounded-full border-4 bg-[#E8E8E8] group-hover:border-hover-blue group-hover:bg-white xl:size-[190px]">
          <div className="after:absolute after:bottom-[21px] after:right-[19px] after:size-4 after:rounded-full after:bg-black group-hover:after:bg-hover-blue after:xl:bottom-[28px] after:xl:right-[26px]" />
          <Image
            src="/static/test-icon-team.png"
            width={160}
            height={160}
            alt="icon"
            className="size-[126px] xl:size-[160px]"
          />
        </div>
        <p className="mt-[10px] text-base font-bold xl:mt-[20px] xl:text-[22px]">
          Ім&apos;я Призвище
        </p>
      </div>
      <p className="mt-[10px] text-base font-normal text-[#8A8A8A] xl:mt-[20px] xl:text-[22px]">
        Пастор
      </p>
    </div>
  );
}
