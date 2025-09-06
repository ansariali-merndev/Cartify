export const Title = ({ title }: { title: string }) => {
  return (
    <div className="flex gap-2 items-center justify-center text-2xl md:text-4xl font-bold text-gray-700 dark:text-gray-300 my-14">
      <h2>{title}</h2>
      <p className="h-1 w-20 md:w-25 bg-gray-700 dark:bg-gray-200"></p>
    </div>
  );
};
