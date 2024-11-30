import {
    ad,
    ansible,
    bash,
    debian,
    exchange,
    m365,
    powershell,
    prometheus,
    python,
    rhel,
    sccm,
    sharepoint,
    terraform,
    ubuntu,
    veeam,
    vsphere,
    windows,
    zabbix,
    mobile,
    backend,
    web,
    git,
    docker,
    corus,
    domtar,
    raymondjames,
    tfrs,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Systems Administration",
        icon: web,
    },
    {
        title: "Network Administration",
        icon: backend,
    },
    {
        title: "Software Engineering",
        icon: mobile,
    },
];

const technologies = [
    {
        name: "vsphere",
        icon: vsphere,
    },
    {
        name: "windows",
        icon: windows,
    },
    {
        name: "ad",
        icon: ad,
    },
    {
        name: "m365",
        icon: m365,
    },
    {
        name: "exchange",
        icon: exchange,
    },
    {
        name: "sccm",
        icon: sccm,
    },
    {
        name: "sharepoint",
        icon: sharepoint,
    },
    {
        name: "powershell",
        icon: powershell,
    },
    {
        name: "ubuntu",
        icon: ubuntu,
    },
    {
        name: "debian",
        icon: debian,
    },
    {
        name: "rhel",
        icon: rhel,
    },
    {
        name: "bash",
        icon: bash,
    },
    {
        name: "python",
        icon: python,
    },
    {
        name: "docker",
        icon: docker,
    },
    {
        name: "ansible",
        icon: ansible,
    },
    {
        name: "terraform",
        icon: terraform,
    },
    {
        name: "prometheus",
        icon: prometheus,
    },
    {
        name: "veeam",
        icon: veeam,
    },
    {
        name: "zabbix",
        icon: zabbix,
    }, 
    {
        name: "git",
        icon: git,
    },
];

const experiences = [
    {
        title: "System Analyst",
        company_name: "Corus Entertainment",
        icon: corus,
        iconBg: "#E6DEDD",
        date: "August 2021 - Present",
        points: [
            "Managed vSphere infrastructure by configuring virtual networks, datastores and deploying virtual machines.",
            "Implemented and monitored backups and recovery using Veeam and Zabbix.",
            "Collaborated with the network team to migrate fromCisco AnyConnect to Global Protect.",
            "Maintained file server, expanded storage and managed permissions.",
            "Developed and implemented automation scripts using Bash, Ansible and Terraform to streamline configuration and validation for Linux Systems.",
            "Deployed a Grafana and Prometheus stack to monitor performance metrics for VMs and vCenter.",
            "Wrote multiple technical manuals for the IT team and the end-users.",
        ],
    },
    {
        title: "System Analyst",
        company_name: "Domtar",
        icon: domtar,
        iconBg: "#E6DEDD",
        date: "March 2021 - August 2021",
        points: [
            "Created and administered Users & Groups via Active Directory.",
            "Managed migration from Win7 to Win10.",
            "Supported 6,000+ end-users across Canada and the US.",
            "Performed analysis including investigations, documentation, recommendation, and problem-solving.",
        ],
    },
    {
        title: "Systems Analyst",
        company_name: "Raymond James",
        icon: raymondjames,
        iconBg: "#E6DEDD",
        date: "December 2019 - March 2021",
        points: [
            "Coordinated and participated in the migration from win7 to win10.",
            "Provided end-user support for Tier 2 and Tier 3 issues, documented resolutions and delivered training on new systems.",
            "Collaborated with multiple teams to secure the transition to work from home.",
        ],
    },
    {
        title: "Systems Administrator",
        company_name: "The Full Room Studio",
        icon: tfrs,
        iconBg: "#E6DEDD",
        date: "March 2015 - August 2016",
        points: [
            "Created and administered Users & Groups via Active Directory.",
            "Configured and deployed workstations as well as render servers using Windows Deployment Services.",
            "Collaborated with management to optimize our systems to support staff scaling from 10 employees to 50+.",
            "Oversaw network implementation after office move.",
            "Carried out troubleshooting processes and diagnosed issues related to hardware, software and network.",
            "Documented company systems and processes into a knowledge base.",
        ],
    },
];

export { services, technologies, experiences };
