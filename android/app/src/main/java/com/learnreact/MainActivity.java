package com.learnreact;

import com.facebook.react.ReactActivity;
import com.google.firebase.database.DataSnapshot;
import com.google.firebase.database.DatabaseError;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import com.google.firebase.database.ValueEventListener;


public class MainActivity extends ReactActivity {

    private static final String TAG = "MainActivity";

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "learnReact";
    }

    public void basicReadWrite() {
        // write msg to database
        FirebaseDatabase database = FirebaseDatabase.getInstance();
        DatabaseReference myRef = database.getReference("message");

        myRef.setValue("Hello World!");

        // end write msg

        // start read msg
        myRef.addValueEventListener(new ValueEventListener() {
            @Override
            public void onDataChange(DataSnapshot dataSnapshot){
                // called once with initial value and again whenver data
                // at this location is updated
                String value = dataSnapshot.getValue(String.class);
                //Log.d(TAG, "Value is " + value);
            }

            @Override
            public void onCancelled(DatabaseError error){
                // failed to read value
               // Log.w(TAG, "Failed to read value.", error.toException());
            }
        });
        // end read msg
    }
}
