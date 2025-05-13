
import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Button } from '@/components/ui/button';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, Shield, AlertTriangle, Trash2, Edit } from 'lucide-react';

// Mock data types - would typically come from backend
export interface ScanEntry {
  id: string;
  input: string;
  exposureLevel: 'low' | 'medium' | 'high';
  timestamp: string;
  findings: number;
  sources: string[];
}

interface AdminPanelProps {
  scanData: ScanEntry[];
  onDeleteScan: (id: string) => void;
  onUpdateScan: (id: string, data: Partial<ScanEntry>) => void;
  onAddScan: (data: Partial<ScanEntry>) => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({
  scanData,
  onDeleteScan,
  onUpdateScan,
  onAddScan
}) => {
  const { toast } = useToast();
  const [editingEntry, setEditingEntry] = useState<ScanEntry | null>(null);
  const [newEntry, setNewEntry] = useState<Partial<ScanEntry>>({
    input: '',
    exposureLevel: 'medium',
    sources: []
  });

  const getExposureBadge = (level: 'low' | 'medium' | 'high') => {
    switch (level) {
      case 'low':
        return <div className="flex items-center gap-1.5">
          <Shield className="h-4 w-4 text-emerald-500" />
          <span className="text-xs font-medium text-emerald-500">Low</span>
        </div>;
      case 'medium':
        return <div className="flex items-center gap-1.5">
          <Eye className="h-4 w-4 text-violet-500" />
          <span className="text-xs font-medium text-violet-500">Medium</span>
        </div>;
      case 'high':
        return <div className="flex items-center gap-1.5">
          <AlertTriangle className="h-4 w-4 text-rose-500" />
          <span className="text-xs font-medium text-rose-500">High</span>
        </div>;
    }
  };

  const handleDelete = (id: string) => {
    onDeleteScan(id);
    toast({
      title: "Entry Deleted",
      description: "The scan entry has been removed.",
    });
  };

  const handleUpdate = () => {
    if (!editingEntry) return;
    
    onUpdateScan(editingEntry.id, editingEntry);
    toast({
      title: "Entry Updated",
      description: "The scan entry has been updated successfully.",
    });
    setEditingEntry(null);
  };

  const handleAdd = () => {
    // Generate a fake ID and timestamp for the new entry in this demo
    const newId = `scan-${Date.now()}`;
    const now = new Date().toISOString();
    
    onAddScan({
      ...newEntry,
      id: newId,
      timestamp: now,
      findings: 0,
      sources: newEntry.sources || []
    });
    
    toast({
      title: "Entry Added",
      description: "A new scan entry has been created.",
    });
    
    // Reset form
    setNewEntry({
      input: '',
      exposureLevel: 'medium',
      sources: []
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold tracking-tight">Admin Dashboard</h2>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="default" className="bg-violet-600 hover:bg-violet-700">
              Add New Entry
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add Scan Entry</DialogTitle>
              <DialogDescription>
                Create a new scan entry for the dashboard.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="input" className="text-right">
                  Input
                </Label>
                <Input
                  id="input"
                  value={newEntry.input}
                  onChange={(e) => setNewEntry({...newEntry, input: e.target.value})}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="level" className="text-right">
                  Level
                </Label>
                <select
                  id="level"
                  value={newEntry.exposureLevel}
                  onChange={(e) => setNewEntry({...newEntry, exposureLevel: e.target.value as 'low' | 'medium' | 'high'})}
                  className="col-span-3 flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="sources" className="text-right">
                  Sources
                </Label>
                <Input
                  id="sources"
                  placeholder="Social Media, Email, etc."
                  value={newEntry.sources?.join(', ')}
                  onChange={(e) => setNewEntry({...newEntry, sources: e.target.value.split(', ')})}
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={handleAdd}>Add Entry</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      
      <div className="rounded-md border bg-white dark:bg-slate-800">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Input</TableHead>
              <TableHead>Exposure Level</TableHead>
              <TableHead>Timestamp</TableHead>
              <TableHead>Findings</TableHead>
              <TableHead>Sources</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {scanData.map((entry) => (
              <TableRow key={entry.id}>
                <TableCell className="font-medium">{entry.input}</TableCell>
                <TableCell>{getExposureBadge(entry.exposureLevel)}</TableCell>
                <TableCell>{new Date(entry.timestamp).toLocaleString()}</TableCell>
                <TableCell>{entry.findings}</TableCell>
                <TableCell>
                  <div className="flex flex-wrap gap-1">
                    {entry.sources.map((source, i) => (
                      <span 
                        key={i}
                        className="px-2 py-0.5 text-xs rounded-full bg-slate-100 dark:bg-slate-700"
                      >
                        {source}
                      </span>
                    ))}
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          variant="outline" 
                          size="icon" 
                          onClick={() => setEditingEntry(entry)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        {editingEntry && (
                          <>
                            <DialogHeader>
                              <DialogTitle>Edit Scan Entry</DialogTitle>
                              <DialogDescription>
                                Make changes to the scan entry.
                              </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                              <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="edit-input" className="text-right">
                                  Input
                                </Label>
                                <Input
                                  id="edit-input"
                                  value={editingEntry.input}
                                  onChange={(e) => setEditingEntry({...editingEntry, input: e.target.value})}
                                  className="col-span-3"
                                />
                              </div>
                              <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="edit-level" className="text-right">
                                  Level
                                </Label>
                                <select
                                  id="edit-level"
                                  value={editingEntry.exposureLevel}
                                  onChange={(e) => setEditingEntry({...editingEntry, exposureLevel: e.target.value as 'low' | 'medium' | 'high'})}
                                  className="col-span-3 flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                >
                                  <option value="low">Low</option>
                                  <option value="medium">Medium</option>
                                  <option value="high">High</option>
                                </select>
                              </div>
                              <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="edit-sources" className="text-right">
                                  Sources
                                </Label>
                                <Input
                                  id="edit-sources"
                                  value={editingEntry.sources.join(', ')}
                                  onChange={(e) => setEditingEntry({
                                    ...editingEntry, 
                                    sources: e.target.value.split(', ')
                                  })}
                                  className="col-span-3"
                                />
                              </div>
                            </div>
                            <DialogFooter>
                              <Button type="submit" onClick={handleUpdate}>Save changes</Button>
                            </DialogFooter>
                          </>
                        )}
                      </DialogContent>
                    </Dialog>
                    
                    <Button 
                      variant="outline" 
                      size="icon"
                      onClick={() => handleDelete(entry.id)}
                    >
                      <Trash2 className="h-4 w-4 text-rose-500" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AdminPanel;
