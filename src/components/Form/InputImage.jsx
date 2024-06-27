import * as React from 'react';
import { CloudArrowUpIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useImperativeHandle } from 'react';

export const InputImage = React.forwardRef(
  ({ onChange, className, disabled = false, imagePath, errorMessage }, ref) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageURL, setImageURL] = useState(imagePath || null);
    const [error, setError] = useState(null);

    useImperativeHandle(ref, () => ({
      value: selectedImage,
    }));

    const imageHandler = (e) => {
      if (!e.target.files || e.target.files.length === 0) {
        setSelectedImage(undefined);
        return;
      }

      const img = e.target.files[0];
      validateImage(img);
      setSelectedImage(img);

      if (onChange) {
        onChange(img);
      }
    };

    const validateImage = (image) => {
      setError(null);

      if (!image.name.match(/\.(jpg|jpeg|png|gif)$/)) {
        const error = 'Wrong file type';
        setError(error);
        return;
      }

      // Check Image  Size
      if (image.size > 5000000) {
        const error = 'file too  large- Upload file less than  5mb';
        setError(error);
        return;
      }

      setError(null);
    };

    useEffect(() => {
      let fileReader,
        isCancel = false;
      if (selectedImage) {
        fileReader = new FileReader();
        fileReader.onload = (e) => {
          const { result } = e.target;
          if (result && !isCancel) {
            setImageURL(result);
          }
        };
        fileReader.readAsDataURL(selectedImage);
      }
      return () => {
        isCancel = true;
        if (fileReader && fileReader.readyState === 1) {
          fileReader.abort();
        }
      };
    }, [selectedImage]);

    return (
      <div className="flex flex-col">
        <label
          htmlFor="dropzone-file"
          className={`flex flex-col items-center justify-center border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 ${
            className ? className : 'h-full w-full'
          }`}
        >
          {error ? (
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <ExclamationTriangleIcon className="w-10 h-10 mb-3 text-red-500" />
              <p className="mb-2 text-sm text-red-500 dark:text-gray-400">{error}</p>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                Pilih Gambar dengan benar.
              </p>
            </div>
          ) : null}
          <div className={`${error ? 'hidden' : ''}`}>
            {selectedImage || imageURL ? (
              <img src={imageURL} className="object-cover h-full w-full" />
            ) : (
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <CloudArrowUpIcon className="w-10 h-10 mb-3 text-gray-400" />
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
            )}
          </div>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            onChange={imageHandler}
            disabled={disabled}
            name={name}
          />
        </label>
        {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
      </div>
    );
  }
);

InputImage.displayName = 'InputImage';

InputImage.propTypes = {
  onChange: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  imagePath: PropTypes.string,
  errorMessage: PropTypes.string,
};
