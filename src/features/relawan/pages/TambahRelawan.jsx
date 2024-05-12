import { ContentLayout } from '@/components/Layout';
import { CloudArrowUpIcon } from '@heroicons/react/24/outline';
import { Button } from '@material-tailwind/react';
import { Card, CardBody } from '@material-tailwind/react';

export const TambahRelawan = () => {
  return (
    <ContentLayout title={'Tambah Relawan'}>
      <Card className="mt-12">
        <CardBody>
          <form className="grid md:grid-cols-3">
            <div className="flex flex-col items-center justify-center">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <CloudArrowUpIcon className="w-10 h-10 mb-3 text-gray-400" />
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>

            <div className="md:col-span-2">
              {/* <Button type="submit" className="w-full">
                Tambah Relawan
              </Button> */}
            </div>
          </form>
        </CardBody>
      </Card>
    </ContentLayout>
  );
};
