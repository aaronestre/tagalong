import supabase from "../../src/supabase-client.js";

export async function getTotalRows() {

    const {count, error} = await supabase.from("vocabulary_words").select("*", { count: "exact", head: true});
    if ( error ) { 
        console.log("There was an error fetching total rows", error);
    }
    return count;

}

export default async function handler(req, res) {
    try {
        const totalRows = await getTotalRows();
        const randomRow = Math.floor(Math.random() * totalRows) + 1;
        const { data, error } = await supabase.from("vocabulary_words").select("*").eq("id", randomRow);
        if ( error ) {
            console.log("There was an error retreiving random word", error);
        }
        return res.json({word: data});
    }
    catch ( error ) {
        console.log("There was an error retreiving random word", error);
    }
}