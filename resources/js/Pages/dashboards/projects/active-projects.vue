<script>
import avatar1 from "@assets/images/users/avatar-1.jpg";
import avatar2 from "@assets/images/users/avatar-2.jpg";
import avatar3 from "@assets/images/users/avatar-3.jpg";
import avatar4 from "@assets/images/users/avatar-4.jpg";
import avatar5 from "@assets/images/users/avatar-5.jpg";
import avatar6 from "@assets/images/users/avatar-6.jpg";

export default {
  setup() {
    return {
      activeProjects: [
        {
          id: 1,
          projectName: "Brand Logo Design",
          img: avatar1,
          projectLead: "Donald Risher",
          percentage: "53%",
          subItem: [
            { id: 1, assImg: avatar1 },
            { id: 2, assImg: avatar2 },
            { id: 3, assImg: avatar3 },
          ],
          badge: "Inprogress",
          badgeClass: "warning",
          dueDate: "06 Sep 2021",
        },
        {
          id: 2,
          projectName: "Redesign - Landing Page",
          img: avatar2,
          projectLead: "Prezy William",
          percentage: "0%",
          subItem: [
            { id: 1, assImg: avatar5 },
            { id: 2, assImg: avatar6 },
          ],
          badge: "Pending",
          badgeClass: "danger",
          dueDate: "13 Nov 2021",
        },
        {
          id: 3,
          projectName: "Multipurpose Landing Template",
          img: avatar3,
          projectLead: "Boonie Hoynas",
          percentage: "100%",
          subItem: [
            { id: 1, assImg: avatar1 },
            { id: 2, assImg: avatar2 },
          ],
          badge: "Completed",
          badgeClass: "success",
          dueDate: "26 Nov 2021",
        },
        {
          id: 4,
          projectName: "Chat Application",
          img: avatar5,
          projectLead: "Pauline Moll",
          percentage: "64%",
          subItem: [
            { id: 1, assImg: avatar2 },
          ],
          badge: "Progress",
          badgeClass: "warning",
          dueDate: "15 Dec 2021",
        },
        {
          id: 5,
          projectName: "Create Wireframe",
          img: avatar6,
          projectLead: "James Bangs",
          percentage: "77%",
          subItem: [
            { id: 1, assImg: avatar1 },
            { id: 2, assImg: avatar6 },
            { id: 3, assImg: avatar4 },
          ],
          badge: "Progress",
          badgeClass: "warning",
          dueDate: "21 Dec 2021",
        },
      ],
    };
  },
};
</script>

<template>
  <BCard no-body>
    <BCardHeader class="d-flex align-items-center">
      <BCardTitle class="flex-grow-1 mb-0">Active Projects</BCardTitle>
      <div class="flex-shrink-0">
        <BLink href="javascript:void(0);" class="btn btn-soft-info btn-sm material-shadow-none">Export Report</BLink>
      </div>
    </BCardHeader>
    <BCardBody>
      <div class="table-responsive table-card">
        <table class="table table-nowrap table-centered align-middle">
          <thead class="bg-light text-muted">
            <tr>
              <th scope="col">Project Name</th>
              <th scope="col">Project Lead</th>
              <th scope="col">Progress</th>
              <th scope="col">Assignee</th>
              <th scope="col">Status</th>
              <th scope="col" style="width: 10%">Due Date</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="(item, index) of activeProjects" :key="index">
              <td class="fw-medium">{{ item.projectName }}</td>
              <td>
                <img :src="item.img" class="avatar-xxs rounded-circle me-1 material-shadow-none" alt="" />
                <BLink href="javascript: void(0);" class="text-reset">{{ item.projectLead }}</BLink>
              </td>
              <td>
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0 me-1 text-muted fs-13">{{ item.percentage }}</div>
                  <BProgress class="progress-sm flex-grow-1 rounded" :value="53" variant="primary" />
                </div>
              </td>
              <td>
                <div class="avatar-group flex-nowrap">
                  <div class="avatar-group-item" v-for="(subitem, index) of item.subItem" :key="index">
                    <BLink href="javascript: void(0);" class="d-inline-block">
                      <img :src="subitem.assImg" alt="" class="rounded-circle avatar-xxs" />
                    </BLink>
                  </div>
                </div>
              </td>
              <td>
                <span :class="{'badge bg-danger-subtle text-danger': item.badgeClass == 'danger', 'badge bg-warning-subtle text-warning': item.badgeClass == 'warning', 'badge bg-success-subtle text-success': item.badgeClass == 'success' }">{{ item.badge }}</span>
              </td>
              <td class="text-muted">{{ item.dueDate }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="align-items-center mt-xl-3 mt-4 justify-content-between d-flex">
        <div class="flex-shrink-0">
          <div class="text-muted">
            Showing <span class="fw-semibold">5</span> of
            <span class="fw-semibold">25</span> Results
          </div>
        </div>
        <ul class="pagination pagination-separated pagination-sm mb-0">
          <li class="page-item disabled">
            <BLink href="#" class="page-link">←</BLink>
          </li>
          <li class="page-item">
            <BLink href="#" class="page-link">1</BLink>
          </li>
          <li class="page-item active">
            <BLink href="#" class="page-link">2</BLink>
          </li>
          <li class="page-item">
            <BLink href="#" class="page-link">3</BLink>
          </li>
          <li class="page-item">
            <BLink href="#" class="page-link">→</BLink>
          </li>
        </ul>
      </div>
    </BCardBody>
  </BCard>
</template>
