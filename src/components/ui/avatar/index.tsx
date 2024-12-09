export type AvatarProps = {
  image: string;
  username: string;
};

export function Avatar({ image, username }: AvatarProps) {
  return (
    <div className="h-14 w-14 rounded-full border-[3px] border-yellow-700 p-1">
      <img
        src={image}
        alt={username}
        className="h-full w-full rounded-full object-cover"
      />
    </div>
  );
}
