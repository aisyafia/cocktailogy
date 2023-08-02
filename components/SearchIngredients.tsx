"use client";

import { IngreProps } from "@/types";
import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";
import { useState, Fragment } from "react";
import { ingredients } from "@/constants";

const SearchIngredients = ({ ingre, setIngre, optional }: IngreProps) => {
  const [query, setQuery] = useState<string>("");

  const filteredIngre =
    query === ""
      ? ingredients
      : ingredients.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="search-manufacturer">
      <Combobox value={ingre} onChange={setIngre}>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/cock-logo-4.svg"
              width={20}
              height={20}
              alt="shaker logo"
              className="ml-4"
            />
          </Combobox.Button>

          <Combobox.Input
            className="search-manufacturer__input"
            placeholder={optional || "i.e. vodka, rum, gin, etc"}
            displayValue={(ingre: string) => ingre}
            onChange={(e) => setQuery(e.target.value)}
          />

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options>
              {filteredIngre.length === 0 && query !== "" ? (
                <Combobox.Option
                  value={query}
                  className="search-manufacturer__option"
                >
                  Sorry, "{query}" is not found
                </Combobox.Option>
              ) : (
                filteredIngre.map((item, idx) => {
                  return (
                    <Combobox.Option
                      key={idx}
                      value={item}
                      className={({ active }) =>
                        `relative search-manufacturer__option ${
                          active
                            ? "bg-primary-blue text-white"
                            : "text-gray-600"
                        }`
                      }
                    >
                      {({ selected, active }) => {
                        return (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? "font-medium" : "font-normal"
                              }`}
                            >
                              {item}
                            </span>
                            {selected ? (
                              <span
                                className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                  active ? "text-white" : "text-teal-600"
                                }`}
                              ></span>
                            ) : null}
                          </>
                        );
                      }}
                    </Combobox.Option>
                  );
                })
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export { SearchIngredients };
