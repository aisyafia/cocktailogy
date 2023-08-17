"use client";

import { Fragment } from "react";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";

import { DrinkDetailProps } from "@/types";

const DrinkDetails = (props: DrinkDetailProps) => {
  const {
    strDrink,
    strDrinkThumb,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strMeasure1,
    strMeasure2,
    strMeasure3,
    strMeasure4,
    strMeasure5,
    strMeasure6,
    strInstructions,
  } = props.drink;

  return (
    <>
      <Transition appear show={props.isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={props.closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-75" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-3 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-90"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-90"
              >
                <Dialog.Panel className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5">
                  <button
                    type="button"
                    onClick={props.closeModal}
                    className="absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full"
                  >
                    <Image
                      src="/close.svg"
                      alt="close"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </button>

                  <div className="flex-1 flex flex-col gap-3">
                    <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
                      <Image
                        src={strDrinkThumb}
                        alt={`picture of ${strDrink}`}
                        fill
                        priority
                        className="object-contain"
                      />
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col gap-2">
                    <h2 className="font-semibold text-xl">{strDrink}</h2>

                    <div className="mt-3 flex flex-wrap gap-4">
                      <h4 className="font-semibold">Ingredients : </h4>
                      <div>
                        {strIngredient1} - {strMeasure1} <br />
                        {strIngredient2 && strMeasure2
                          ? `${strIngredient2} - ${strMeasure2}`
                          : ""}{" "}
                        <br />
                        {strIngredient3 && strMeasure3
                          ? `${strIngredient3} - ${strMeasure3}`
                          : ""}{" "}
                        <br />
                        {strIngredient4 && strMeasure4
                          ? `${strIngredient4} - ${strMeasure4}`
                          : ""}{" "}
                        <br />
                        {strIngredient5 && strMeasure5
                          ? `${strIngredient5} - ${strMeasure5}`
                          : ""}{" "}
                        <br />
                        {strIngredient6 && strMeasure6
                          ? `${strIngredient6} - ${strMeasure6}`
                          : ""}{" "}
                      </div>
                    </div>
                    <h4 className="font-semibold">How to make: </h4>
                    {strInstructions}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default DrinkDetails;
