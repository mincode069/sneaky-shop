import React from "react";
import { useForm, useFieldArray, useWatch } from "react-hook-form";
import { addProduct, editProduct } from "../../../services/product-service";

import "./ProductForm.scss";

const fieldArrayName = "images";

const Display = ({ control, index }) => {
  const data = useWatch({
    control,
    name: `${fieldArrayName}.${index}`,
  });
  if (!data?.URLImg) return null;
  return (
    <div>
      <div
        class="img"
        style={{
          minHeight: "200px",
          backgroundImage: `url(${data?.URLImg})`,
        }}
      ></div>
    </div>
  );
};

const Edit = ({ update, index, value, control }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: value,
  });
  const data = useWatch({
    control,
    name: `${fieldArrayName}.${index}`,
  });

  return (
    <div class="show__images">
      <div className={`${data?.URLImg ? "img__side" : ""}`}>
        <Display control={control} index={index} />
      </div>
      <div className="input__side">
        <input
          class="form__input"
          placeholder="URL of picture"
          {...register(`URLImg`, { required: true })}
        />{" "}
        <button
          class="button__form"
          type="button"
          onClick={handleSubmit((data) => {
            update(index, data);
            console.log(index, data);
          })}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

function ProductForm(props) {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    defaultValues: {
      ...props.product,
    },
  });

  const { fields, append, update, remove } = useFieldArray({
    control,
    name: fieldArrayName,
    defaultValues: {
      [fieldArrayName]: [],
    },
  });

  const closeForm = () => {
    props.onClose();
    props.onEdit(0);
  };

  const handleSubmitHelper = (id, data, serviceFunc) => {
    console.log(data);
    handleSubmit(() => {
      serviceFunc(data.title, data.price, data.images, data.category, id)
        .then((response) => {
          props.onClose();
          reset();
          props.onEdit(0);
          props.onGetProduct();
        })
        .catch((error) => {
          console.error(error);
        });
    })();
  };

  const onSubmit = (data) => {
    if (props.isEdit) {
      handleSubmitHelper(props.product.id, data, editProduct);
    } else {
      handleSubmitHelper(null, data, addProduct);
      console.log(data);
    }
  };

  return (
    <div>
      {props.show ? (
        <form onSubmit={handleSubmit(onSubmit)} class="au__container">
          <div class="au__form">
            <h5 class="form__title">Title</h5>
            <input
              class="form__input"
              placeholder="Title"
              type="text"
              {...register("title", {
                required: true,
              })}
            />
            {errors.title && <p class="form__error">Please check the Title</p>}
          </div>

          <div class="au__form">
            <h5 class="form__title">Price</h5>
            <input
              class="form__input"
              placeholder="Price"
              type="text"
              {...register("price", {
                required: true,
              })}
            />
            {errors.price && <p class="form__error">Please check the Price</p>}
          </div>

          <div className="au__form ">
            <h5 class="form__title">Images</h5>
            <div class="form__img">
              {fields.map((field, index) => (
                <fieldset key={field.id}>
                  <i
                    class="fa-solid fa-xmark right__side"
                    type="button"
                    onClick={() => remove(index)}
                  ></i>
                  <Edit
                    control={control}
                    update={update}
                    index={index}
                    value={field}
                  />
                </fieldset>
              ))}
            </div>
          </div>

          <button
            class="button__form"
            type="button"
            onClick={() => {
              append({
                URLImg: "",
              });
            }}
          >
            more
          </button>

          <div class="au__form">
            <h5 class="form__title">Category</h5>
            <select
              class="form__input"
              placeholder="Category"
              type="category"
              {...register("category", {
                required: true,
              })}
            >
              <option value="Jacket">Jacket</option>
              <option value="Backpack">Backpack</option>
              <option value="Sling Bag">Sling Bag</option>
              <option value="Cap">Cap</option>
              <option value="Belt">Belt</option>
            </select>
          </div>

          <div class="form__button-container ">
            <button type="button" onClick={closeForm} class="form__button">
              Close
            </button>
            <button
              type="submit"
              class="form__button submit__button"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </div>
        </form>
      ) : null}
    </div>
  );
}

export default ProductForm;
