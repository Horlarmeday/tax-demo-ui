<template>
  <!--begin::Base Table Widget 2-->
  <div class="card card-custom card-stretch gutter-b">
    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label font-weight-bolder text-dark">Assigned Taxes</span>
      </h3>
    </div>
    <!--end::Header-->
    <!--begin::Body-->
    <div class="card-body pt-2 pb-0">
      <!--begin::Table-->
      <div class="table-responsive">
        <table
          class="table table table-head-custom table-vertical-center"
          id="kt_advance_table_widget_4"
        >
          <thead>
            <tr>
              <th class="pl-0" style="min-width: 150px">Name</th>
              <th style="min-width: 150px">Date</th>
              <th style="min-width: 140px">Approval Status</th>
              <th class="pr-0 text-right" style="min-width: 120px">Actions</th>
            </tr>
          </thead>
          <tbody>
            <template v-if="!taxes.length">
              <tr>
                <td colspan="9" align="center" class="text-muted">No Data</td>
              </tr>
            </template>
            <template v-for="(tax, i) in taxes">
              <tr v-bind:key="i">
                <td class="pl-0">
                  <a
                    href="#"
                    class="text-dark font-weight-bolder text-hover-primary mb-1 font-size-lg"
                    >{{ tax.User.name }}</a
                  >
                </td>
                <td>
                  <span class="text-dark font-size-lg font-weight-bold">{{
                    tax.createdAt | moment("ddd, MMM Do YYYY, h:mma")
                  }}</span>
                </td>
                <td>
                  <span
                    class="label label-lg label-inline"
                    :class="displayLabel(tax.officer_approval_status)"
                    >{{ tax.officer_approval_status }}
                  </span>
                </td>
                <td class="pr-0 text-right">
                  <router-link
                    :to="`/tax/${tax.id}`"
                    class="btn btn-icon btn-light btn-hover-primary btn-sm mr-2"
                    v-b-tooltip.hover
                    title="Approve Tax"
                  >
                    <arrow-right-icon />
                  </router-link>
<!--                  <a-->
<!--                    href="#"-->
<!--                    @click="finalApproval(tax.id)"-->
<!--                    class="btn btn-icon btn-light btn-hover-primary btn-sm"-->
<!--                    v-if="tax.officer_approval_status === 'Approved'"-->
<!--                  >-->
<!--                    <approve-icon />-->
<!--                  </a>-->
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
      <!--end::Table-->
    </div>
    <!--end::Body-->
  </div>
  <!--end::Base Table Widget 2-->
</template>

<script>
import axios from "../../../../axios";
import ArrowRightIcon from "../../components/ArrowRightIcon";

export default {
  name: "Taxes",
  components: { ArrowRightIcon },
  data() {
    return {
      taxes: [],
      getTaxesUrl: "/taxes/officer",
      getStaffsUrl: "/staffs",
      // finalApprovalUrl: "/taxes/final-approval",
      // assignOfficerUrl: "/taxes/assign",
      taxIds: [],
      staffs: [],
      staff_id: ""
    };
  },
  methods: {
    notifySuccess(response) {
      this.$notify({
        group: "foo",
        title: "Success message",
        text: response.data.message,
        type: "success"
      });
    },

    notifyError(error) {
      this.$notify({
        group: "foo",
        title: "Error message",
        text: error.response.data,
        type: "error"
      });
    },

    displayLabel(status) {
      if (status === "Pending") return "label-warning";
      if (status === "Approved") return "label-success";
      if (status === "Declined") return "label-danger";
      return "label-dark";
    },

    getTaxes() {
      axios
        .get(this.getTaxesUrl)
        .then(response => {
          this.taxes = response.data.data;
        })
        .catch(error => {
          this.notifyError(error);
        });
    },

    // finalApproval(id) {
    //   const response = window.confirm("Are you sure");
    //   if (response) {
    //     axios
    //       .post(this.finalApprovalUrl, { id })
    //       .then(response => {
    //         this.notifySuccess(response);
    //       })
    //       .catch(error => {
    //         this.notifyError(error);
    //       });
    //   }
    // },

    arrayRemove(arr, value) {
      return arr.filter(function(element) {
        return element != value;
      });
    },

    getTaxIds(value, event) {
      if (event.target.checked) {
        this.taxIds.push({ id: value });
      } else {
        const found = this.taxIds.find(element => element.id === value);
        this.taxIds = this.arrayRemove(this.taxIds, found);
      }
    },

    // assignOfficer() {
    //   const data = {
    //     taxIds: this.taxIds,
    //     staff_id: this.staff_id
    //   };
    //   axios
    //     .post(this.assignOfficerUrl, data)
    //     .then(response => {
    //       this.notifySuccess(response);
    //       this.taxIds = [];
    //       this.staff_id = "";
    //     })
    //     .catch(error => {
    //       this.notifyError(error);
    //     });
    // },
  },
  // computed: {
  //   arrivals() {
  //     return this.$store.state.dashboard.arrivals;
  //   }
  // },
  created() {
    this.getTaxes();
  }
};
</script>
