import { Navbar, Button, Typography } from '@material-tailwind/react';
import { Head } from '@/components/Head';
import { Link } from 'react-router-dom';

export const Landing = () => {
  return (
    <>
      <Head />

      <Navbar shadow={false} fullWidth className="border-b-black border-2">
        <div className="container mx-auto flex items-center justify-between">
          <Typography color="blue-gray" className="text-lg font-bold">
            SIMKAMP
          </Typography>
          <Link to="/auth/login">
            <Button variant="gradient">Log in</Button>
          </Link>
        </div>
      </Navbar>
      <header className="flex justify-center items-center bg-white p-8 h-screen mt-[-76px]">
        <div className=" w-full">
          <div className="container mx-auto text-center">
            <Typography className="inline-flex text-xs rounded-lg border-[1.5px] border-blue-gray-50 bg-white py-1 lg:px-4 px-1 font-medium text-primary">
              Waktu Pemilihan Semakin Dekat !
            </Typography>
            <Typography
              variant="h1"
              color="blue-gray"
              className="mx-auto my-6 w-full max-w-4xl text-6xl"
            >
              Bersiap untuk menghadapi waktu{' '}
              <span className="text-green-500 leading-snug ">pemilihan</span> dan{' '}
              <span className="leading-snug text-green-500">berkampanye</span>.
            </Typography>
            {/* <Typography
              variant="lead"
              className="mx-auto w-full !text-gray-500 lg:text-lg text-base"
            >
              The time is now for it to be okay to be great. For being a bright color. For standing
              out.
            </Typography> */}
            {/* <div className="mt-8 grid w-full place-items-start md:justify-center">
              <div className="mb-2 flex w-full flex-col gap-4 md:flex-row">
                <Input color="gray" label="Enter your email" size="lg" />
                <Button color="gray" className="w-full px-4 md:w-[12rem]">
                  get started
                </Button>
              </div>
            </div> */}
          </div>
        </div>
      </header>
    </>
  );
};
