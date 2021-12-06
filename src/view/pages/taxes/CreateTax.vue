<template>
  <div class="d-flex flex-column flex-root">
    <div class="card card-custom card-stretch">
      <div class="card-header py-5">
        <h3 class="card-title align-items-center flex-column">
          <span class="card-label font-weight-bolder text-dark text-center"
            >Tax Application Form</span
          >
        </h3>
        <div>
          <a href="#" class="mb-5">
            <img width="100" src="/media/logos/zamfara.png" alt="" />
          </a>
        </div>
      </div>

      <div class="card-body">
        <div class="form">
          <h5 class="text-center mb-3">Personal Information</h5>
          <div class="form-group row">
            <label class="col-xl-3 col-lg-3 text-right col-form-label"
              >Name</label
            >
            <div class="col-lg-9 col-xl-6">
              <input
                type="text"
                v-model="name"
                name="name"
                v-validate="'required'"
                data-vv-validate-on="blur"
                class="form-control form-control-lg form-control-solid"
              />
              <span class="text-danger text-sm">{{
                errors.first("name")
              }}</span>
            </div>
          </div>
          <div class="form-group row">
            <label class="col-xl-3 col-lg-3 text-right col-form-label"
              >Phone</label
            >
            <div class="col-lg-9 col-xl-6">
              <input
                type="text"
                v-model="phone"
                name="phone"
                v-validate="'required'"
                data-vv-validate-on="blur"
                minlength="11"
                maxlength="11"
                class="form-control form-control-lg form-control-solid"
              />
              <span class="text-danger text-sm">{{
                errors.first("phone")
              }}</span>
            </div>
          </div>
          <div class="form-group row">
            <label class="col-xl-3 col-lg-3 text-right col-form-label"
              >Email</label
            >
            <div class="col-lg-9 col-xl-6">
              <input
                type="email"
                v-model="email"
                class="form-control form-control-lg form-control-solid"
                name="email"
                v-validate="'required'"
                data-vv-validate-on="blur"
              />
              <span class="text-danger text-sm">{{
                errors.first("email")
              }}</span>
            </div>
          </div>
          <div class="form-group row">
            <label class="col-xl-3 col-lg-3 text-right col-form-label"
              >Address</label
            >
            <div class="col-lg-9 col-xl-6">
              <input
                type="text"
                v-model="address"
                class="form-control form-control-lg form-control-solid"
                name="address"
                v-validate="'required'"
                data-vv-validate-on="blur"
              />
              <span class="text-danger text-sm">{{
                errors.first("address")
              }}</span>
            </div>
          </div>
          <h5 class="text-center mb-3 text-lg-center">Tax Information</h5>
          <div class="form-group row">
            <label class="col-xl-3 col-lg-3 text-right col-form-label"
              >Source of Income</label
            >
            <div class="col-lg-9 col-xl-6">
              <input
                type="text"
                v-model="source_of_income"
                class="form-control form-control-lg form-control-solid"
                name="source_of_income"
                v-validate="'required'"
                data-vv-validate-on="blur"
              />
              <span class="text-danger text-sm">{{
                errors.first("source_of_income")
              }}</span>
            </div>
          </div>
          <div class="form-group row">
            <label class="col-xl-3 col-lg-3 text-right col-form-label"
              >Tin</label
            >
            <div class="col-lg-9 col-xl-6">
              <input
                type="text"
                v-model="tin"
                class="form-control form-control-lg form-control-solid"
              />
            </div>
          </div>
          <div style="margin-left: 25.3%" class="mt-5 mb-5">
            <button
              class="text-right btn btn-sm btn-success"
              @click="addMoreIncome"
            >
              Add
            </button>
          </div>
          <div class="form-group row">
            <label class="col-lg-3 text-right col-form-label">Income</label>
            <table>
              <tbody v-for="(income, i) in incomes" :key="i">
                <tr class="mb-4">
                  <td class="w-25">
                    <select
                      v-model="income.year"
                      class="form-control form-control-lg form-control-solid ml-3"
                      name="year"
                      v-validate="'required'"
                      data-vv-validate-on="blur"
                    >
                      <option selected>Select Year</option>
                      <option>2015</option>
                      <option>2016</option>
                      <option>2017</option>
                      <option>2018</option>
                      <option>2019</option>
                      <option>2020</option>
                      <option>2021</option>
                      <option>2022</option>
                      <option>2023</option>
                      <option>2024</option>
                      <option>2025</option>
                    </select>
                    <span class="text-danger text-sm">{{
                      errors.first("year")
                    }}</span>
                  </td>
                  <td class="w-40">
                    <input
                      type="text"
                      v-model="income.income"
                      class="form-control form-control-lg form-control-solid ml-5"
                      placeholder="Income"
                      name="income"
                      v-validate="'required'"
                      data-vv-validate-on="blur"
                    />
                    <span class="text-danger text-sm">{{
                      errors.first("income")
                    }}</span>
                  </td>
                  <td class="w-35">
                    <input
                      type="text"
                      v-model="income.amount_tax_paid"
                      class="form-control form-control-lg form-control-solid ml-8"
                      placeholder="Tax Amount"
                      name="tax_amount"
                      v-validate="'required'"
                      data-vv-validate-on="blur"
                    />
                    <span class="text-danger text-sm">{{
                      errors.first("tax_amount")
                    }}</span>
                  </td>
                  <td>
                    <button
                      class="btn btn-sm btn-danger ml-9"
                      v-if="i !== 0"
                      @click="removeIncome"
                    >
                      Clear
                    </button>
                  </td>
                </tr>
                <br />
              </tbody>
            </table>
          </div>
          <div class="mt-5">
            <div class="text-center">
              <button
                ref="kt_tax_submit"
                class="btn btn-lg btn-success btn-elevate text-center"
                @click="createTax"
                :disabled="isDisabled"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <notifications group="foo" />
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "CreateTax",
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      address: "",
      tin: "",
      source_of_income: "",
      incomes: [
        {
          year: "",
          income: "",
          amount_tax_paid: ""
        }
      ],
      createTaxUrl: "/taxes",
      isDisabled: false
    };
  },
  methods: {
    addSpinner(submitButton) {
      this.isDisabled = true;
      submitButton.classList.add("spinner", "spinner-light", "spinner-right");
    },

    removeSpinner(submitButton) {
      this.isDisabled = false;
      submitButton.classList.remove(
        "spinner",
        "spinner-light",
        "spinner-right"
      );
    },
    notifyError(error) {
      this.$notify({
        group: "foo",
        title: "Error message",
        text: error.response.data,
        type: "error"
      });
    },

    notifySuccess(response) {
      this.$notify({
        group: "foo",
        title: "Success message",
        text: response.data.message,
        type: "success"
      });
    },

    addMoreIncome() {
      this.incomes.push({
        year: "",
        income: "",
        amount_tax_paid: ""
      });
    },

    removeIncome(index) {
      this.incomes.splice(index, 1);
    },

    createTax() {
      this.$validator.validateAll().then(result => {
        if (result) {
          const data = {
            incomes: this.incomes,
            name: this.name,
            email: this.email,
            address: this.address,
            source_of_income: this.source_of_income,
            tin: this.tin,
            phone: this.phone
          };
          const submitButton = this.$refs["kt_tax_submit"];
          this.addSpinner(submitButton);

          axios
            .post(this.createTaxUrl, data)
            .then(response => {
              this.notifySuccess(response);
              this.removeSpinner(submitButton);
              this.initValues();
            })
            .catch(error => {
              this.removeSpinner(submitButton);
              this.notifyError(error);
            });
        }
      });
    },
    initValues() {
      this.name = "";
      this.email = "";
      this.address = "";
      this.phone = "";
      this.tin = "";
      this.source_of_income = "";
      this.incomes = [
        {
          income: "",
          amount_tax_paid: "",
          year: ""
        }
      ];
    }
  }
};
</script>

<style scoped></style>
