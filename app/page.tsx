// imports
import Dropzone from '@/components/dropzone';

export default function Home() {
  return (
    <div className="space-y-16 pb-8">
      {/* Title + Desc */}
      <div className="space-y-6">
        <h1 className="text-3xl md:text-5xl font-medium text-center">
          Free Unlimited File Converter
        </h1>
        <p className="text-gray-400 text-md md:text-lg text-center md:px-24 xl:px-44 2xl:px-52">
  Discover the power of InfinityCreator, your premier destination for unlimited multimedia conversion. Effortlessly transform images, audio, and videos for free, without any limitations. Begin your conversion journey today with InfinityCreator and take your creative content to unparalleled heights!
</p>

      </div>

      {/* Upload Box */}
      <Dropzone />
    </div>
  );
}
