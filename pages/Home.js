import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons} from "@expo/vector-icons";

const Home = () => {
    const totalPresent = history.filter(item => item.status === "Present").length;
    const totalAbsent  = history.filter(item => item.status === "Absent").length;
    return (
    <SafeAreaView style={styles.container}>
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Attendence App</Text>

            <View style={styles.card}>
                <View style={styles.icon}>
                <MaterialIcons name="person" size={40} color="#555" />
                </View>

                <View>
                    <Text style={styles.name}>Wibby Garcia Kurniawan</Text>
                    <Text>NIM : 0320240081</Text>
                    <Text>Class : MI2A</Text>
                </View>

            </View>

            <View style={styles.classCard}>
                <Text style={styles.subtitle}>Today's Class</Text>
                <Text>Mobile Programming</Text>
                <Text>08:00 - 10:00</Text>
                <Text>Lab 3</Text>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>CHECK IN</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.classCard}>
                <Text style={styles.subtitle}>Upcoming Class</Text>
                <Text>Database Systems</Text>
                <Text>10:00 - 12:00</Text>
                <Text>Lab 2</Text>
            </View>

            <View style={styles.classCard}>
                <Text style={styles.subtitle}>Attendance Summary</Text>
                <Text>Present : {totalPresent}</Text>
                <Text>Absent  : {totalAbsent}</Text>
            </View>

            <Text style={styles.subtitle}>Attendence History</Text>
                <FlatList
                    data={history}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                    scrollEnabled={false}
                />

            </ScrollView>
    </SafeAreaView>
    );
};

const history = [
    { id: "1",  course: "Mobile Programming",  date: "2026-03-01", status: "Present" },
    { id: "2",  course: "Database Systems",     date: "2026-03-02", status: "Absent" },
    { id: "3",  course: "Operating System",     date: "2026-03-03", status: "Absent"  },
    { id: "4",  course: "Computer Network",     date: "2026-03-04", status: "Present" },
    { id: "5",  course: "Web Programming",      date: "2026-03-05", status: "Absent"  },
    { id: "6",  course: "Software Engineering", date: "2026-03-06", status: "Present" },
    { id: "7",  course: "Mobile Programming",   date: "2026-03-07", status: "Present" },
    { id: "8",  course: "Database Systems",     date: "2026-03-08", status: "Absent"  },
    { id: "9",  course: "Operating System",     date: "2026-03-09", status: "Present" },
    { id: "10", course: "Computer Network",     date: "2026-03-10", status: "Present" },
    { id: "11", course: "Web Programming",      date: "2026-03-11", status: "Present" },
    { id: "12", course: "Software Engineering", date: "2026-03-12", status: "Absent"  },
    { id: "13", course: "Mobile Programming",   date: "2026-03-13", status: "Present" },
    { id: "14", course: "Database Systems",     date: "2026-03-14", status: "Present" },
    { id: "15", course: "Operating System",     date: "2026-03-15", status: "Absent"  },
    { id: "16", course: "Computer Network",     date: "2026-03-16", status: "Present" },
    { id: "17", course: "Web Programming",      date: "2026-03-17", status: "Present" },
    { id: "18", course: "Software Engineering", date: "2026-03-18", status: "Present" },
    { id: "19", course: "Mobile Programming",   date: "2026-03-19", status: "Absent"  },
    { id: "20", course: "Database Systems",     date: "2026-03-20", status: "Present" },
    { id: "21", course: "Operating System",     date: "2026-03-21", status: "Present" },
    { id: "22", course: "Computer Network",     date: "2026-03-22", status: "Absent"  },
    { id: "23", course: "Web Programming",      date: "2026-03-23", status: "Present" },
];

const renderItem = ({ item }) => (
    <View style={styles.item}>

        <View>
            <Text style={styles.course}>{item.course}</Text>
            <Text style={styles.date}>{item.date}</Text>
        </View>

        <View style={styles.statusRow}>
        <MaterialIcons
            name={item.status === "Present" ? "check-circle" : "cancel"}
            size={16}
            color={item.status === "Present" ? "green" : "red"}
        />
            <Text style={item.status === "Present" ? styles.present : styles.absent}>
                {" "}{item.status}
            </Text>
        </View>

    </View>
    );

const styles = StyleSheet.create({
    container : {
        flex : 1,
        padding : 20,
        backgroundColor : "#f5f5f5"
    },

    title: {
        fonstSize : 24,
        fontWeight : "bold"
    },

    card: {
        flexDirection: "row",
        backgroundColor: "white",
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
    },

    icon: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: "#eee",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 15,
    },

    name: {
        fontSize: 18,
        fontWeight: "bold",
    },

    subtitle:{
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10
    },

    button: {
        marginTop: 10,
        backgroundColor: "#007AFF",
        padding: 10,
        borderRadius: 8,
        alignItems: "center",
    },

    buttonText: {
        color: "white",
    },

    content : {
        padding : 20,
        paddingBottom : 40
    },

    item: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "white",
        padding: 12,
        borderRadius: 8,
        marginBottom: 8,
    },

    course: {
        fontSize: 16,
    },

    date: {
        fontSize: 12,
        color: "gray",
    },

    present: {
        color: "green",
        fontWeight: "bold",
    },

    absent: {
        color: "red",
        fontWeight: "bold",
    },
    
    statusRow: {
        flexDirection: "row",
        alignItems: "center",
    },
});

export default Home;