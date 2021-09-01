import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

export default function App() {
    const [showSurvey, setShowSurvey] = React.useState(false);

    const [where, setWhere] = React.useState("");
    const [what, setWhat] = React.useState("");
    const [feel, setFeel] = React.useState("");

    return (
        <View style={styles.container}>
            {showSurvey ?
                <View style={styles.container}>
                    <StatusBar style="auto" />
                    <Text>Where were you when the seizure happened?</Text>
                    <TextInput
                        style={styles.textinput}
                        onChangeText={text => setWhere(text)}
                        value={where}
                    />
                    <Text>What were you doing when the seizure happened?</Text>
                    <TextInput
                        style={styles.textinput}
                        onChangeText={text => setWhat(text)}
                        value={what}
                    />
                    <Text>Did you feel anything right before the seizure happened?</Text>
                    <TextInput
                        style={styles.textinput}
                        onChangeText={text => setFeel(text)}
                        value={feel}
                    />
                    <TouchableOpacity
                        onPress={() => alert("Thank you! Your experience has been sent to the server and will be analysed as soon as possible.") & setShowSurvey(false)}
                        style={styles.viewButton}>
                        <Text style={{ fontSize: 21, color: '#fff' }}>Submit</Text>
                    </TouchableOpacity>
                </View>
                :
                <TouchableOpacity
                    onPress={() => setShowSurvey(true)}
                    style={styles.viewButton}>
                    <Text style={{ fontSize: 21, color: '#fff' }}>I just had a seizure</Text>
                </TouchableOpacity>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewButton: {
        backgroundColor: "#72a8d3",
        textAlign: "center",

    },
    textinput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
    }
});
