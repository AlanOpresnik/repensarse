import Image from "next/image";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/541172497547" // <-- cambia por tu número con código de país
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6  rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 flex items-center justify-center"
    >
      <Image src={'https://cdn-icons-png.flaticon.com/512/3670/3670051.png'} width={70} height={300} alt="wsp image" />
    </a>
  );
}
